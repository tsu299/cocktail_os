import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wine } from "lucide-react";
import CabinetScene from "@/components/CabinetScene";
import {
    IllustWiki,
    IllustBar,
    IllustDice,
    IllustMap,
    IllustAI,
} from "@/components/Illustrations";

/** Module metadata */
interface ModuleMeta {
    id: string;
    title: string;
    sub: string;
    desc: string;
    note: string;
    Illust: React.ComponentType<{ className?: string }>;
}

const modules: Record<string, ModuleMeta> = {
    wiki: {
        id: "wiki",
        title: "調酒百科",
        sub: "WIKI",
        desc: "收錄 IBA 標準配方與經典酒譜，完整的風味描述、材料索引與製作步驟。",
        note: "80+ 經典酒譜，持續更新中",
        Illust: IllustWiki,
    },
    bar: {
        id: "bar",
        title: "我的酒櫃",
        sub: "MY BAR",
        desc: "記錄你擁有的每一瓶酒，搭配酒譜自動比對可做的調酒。",
        note: "告訴你今晚能做什麼",
        Illust: IllustBar,
    },
    dice: {
        id: "dice",
        title: "靈感骰子",
        sub: "RANDOMIZER",
        desc: "不知道喝什麼？指定基酒或全部隨機，搖一搖就有答案。",
        note: "搖一搖 ✦",
        Illust: IllustDice,
    },
    map: {
        id: "map",
        title: "跑吧日記",
        sub: "BAR HOPPING",
        desc: "紀錄每一次跑吧的足跡：去了哪間店、喝了什麼、私房筆記。",
        note: "你的酒吧地圖",
        Illust: IllustMap,
    },
    ai: {
        id: "ai",
        title: "AI 調酒師",
        sub: "COPILOT",
        desc: "給 AI 你的庫存和心情，推薦能做的調酒或發明新配方。",
        note: "專屬調酒顧問",
        Illust: IllustAI,
    },
};

/**
 * Cocktail OS 首頁
 *
 * 一整幅酒櫃插畫，hover 物品 → 便籤彈出
 */
export default function HomePage() {
    const [activeZone, setActiveZone] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cabinetRef = useRef<HTMLDivElement>(null);

    const handleZoneEnter = useCallback((id: string) => {
        setActiveZone(id);
    }, []);

    const handleZoneLeave = useCallback(() => {
        setActiveZone(null);
    }, []);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!cabinetRef.current) return;
            const rect = cabinetRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    const activeMod = activeZone ? modules[activeZone] : null;

    return (
        <div className="page">
            {/* Nav */}
            <nav className="nav-bar">
                <div className="nav-inner">
                    <div className="nav-logo">
                        <Wine size={18} strokeWidth={1.5} />
                        <span className="nav-logo-text">Cocktail OS</span>
                    </div>
                    <button className="nav-login">sign in ✦</button>
                </div>
            </nav>

            {/* Title */}
            <motion.div
                className="page-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="page-brand">COCKTAIL OS</div>
                <h1 className="page-title">
                    你的<em>數位酒櫃</em>
                </h1>
                <div className="page-handnote">探索櫃上的物品 ✦</div>
            </motion.div>

            {/* === Cabinet Scene === */}
            <div className="cabinet-wrap">
                <motion.div
                    ref={cabinetRef}
                    className="cabinet-scene"
                    onMouseMove={handleMouseMove}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <CabinetScene
                        activeZone={activeZone}
                        onZoneEnter={handleZoneEnter}
                        onZoneLeave={handleZoneLeave}
                    />

                    {/* === Sticky Note Popup === */}
                    <AnimatePresence>
                        {activeMod && (
                            <StickyNote
                                mod={activeMod}
                                mouseX={mousePos.x}
                                mouseY={mousePos.y}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="page-footer-wrap">
                <footer className="page-footer">
                    <span>© 2026 COCKTAIL OS</span>
                    <span className="footer-hand">Built with care ✦</span>
                </footer>
            </div>
        </div>
    );
}

/* ─── Sticky Note ─── */
function StickyNote({
    mod,
    mouseX,
    mouseY,
}: {
    mod: ModuleMeta;
    mouseX: number;
    mouseY: number;
}) {
    const Illust = mod.Illust;

    // Position note near mouse but offset to avoid covering the object
    // Clamp so it doesn't go off-screen
    const noteStyle: React.CSSProperties = {
        left: `${Math.min(mouseX + 20, window.innerWidth * 0.6)}px`,
        top: `${Math.max(mouseY - 60, 10)}px`,
    };

    return (
        <motion.div
            className="sticky-note"
            style={noteStyle}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.18 }}
        >
            {/* Tape / pin at top */}
            <div className="sticky-tape" />

            <div className="sticky-inner">
                {/* Text side */}
                <div className="sticky-text">
                    <div className="sticky-title">{mod.title}</div>
                    <div className="sticky-sub">{mod.sub}</div>
                    <p className="sticky-desc">{mod.desc}</p>
                    <div className="sticky-note-hand">{mod.note}</div>
                </div>

                {/* Illustration side */}
                <div className="sticky-illust-wrap">
                    <Illust className="sticky-illust" />
                </div>
            </div>
        </motion.div>
    );
}
