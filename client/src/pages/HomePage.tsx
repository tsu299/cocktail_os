import { motion } from "framer-motion";
import { Wine } from "lucide-react";
import {
    IllustWiki,
    IllustBar,
    IllustDice,
    IllustMap,
    IllustAI,
} from "@/components/Illustrations";

/** 酒櫃內容物 */
const shelfTop = [
    {
        number: "01",
        title: "調酒百科",
        sub: "WIKI",
        desc: "IBA 標準配方、經典酒譜與風味索引",
        note: "80+ 經典酒譜",
        phase: "Phase 1",
        Illust: IllustWiki,
    },
    {
        number: "02",
        title: "我的酒櫃",
        sub: "MY BAR",
        desc: "記錄你擁有的每一瓶酒，搭配可做酒譜",
        note: "你的個人庫存",
        phase: "Phase 1",
        Illust: IllustBar,
    },
    {
        number: "03",
        title: "靈感骰子",
        sub: "RANDOMIZER",
        desc: "不知道喝什麼？搖一搖讓骰子決定",
        note: "搖一搖 ✦",
        phase: "Phase 2",
        Illust: IllustDice,
    },
];

const shelfBottom = [
    {
        number: "04",
        title: "跑吧日記",
        sub: "BAR HOPPING",
        desc: "紀錄每一次跑吧的足跡與私房筆記",
        note: "你的酒吧地圖",
        phase: "Phase 2",
        Illust: IllustMap,
    },
    {
        number: "05",
        title: "AI 調酒師",
        sub: "COPILOT",
        desc: "根據庫存與心情，AI 推薦專屬配方",
        note: "專屬調酒顧問",
        phase: "Phase 2",
        Illust: IllustAI,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/**
 * Cocktail OS 首頁 — 木製酒櫃風格
 */
export default function HomePage() {
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

            {/* === The Cabinet === */}
            <div className="cabinet">
                <div className="cabinet-frame">
                    {/* Crown molding */}
                    <div className="cabinet-crown" />

                    {/* Header */}
                    <motion.div
                        className="cabinet-header"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cabinet-brand">COCKTAIL OS</div>
                        <h1 className="cabinet-title">
                            數位<em>酒櫃</em>
                        </h1>
                        <div className="cabinet-handnote">挑一瓶，開始今晚的旅程 ✦</div>
                        <p className="cabinet-subtitle">
                            探索經典調酒、管理庫存、紀錄跑吧，或讓 AI 推薦配方
                        </p>
                    </motion.div>

                    {/* === Shelf 1 === */}
                    <motion.div
                        className="shelf"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="shelf-plank">
                            <div className="shelf-items">
                                {shelfTop.map((item) => {
                                    const Illust = item.Illust;
                                    return (
                                        <motion.div
                                            key={item.number}
                                            className="cabinet-item"
                                            variants={fadeUp}
                                        >
                                            <Illust className="cabinet-item-illust" />
                                            <div className="cabinet-item-label">
                                                <div className="cabinet-item-number">No. {item.number}</div>
                                                <div className="cabinet-item-title">{item.title}</div>
                                                <div className="cabinet-item-sub">{item.sub}</div>
                                                <div className="cabinet-item-desc">{item.desc}</div>
                                                <div className="cabinet-item-note">{item.note}</div>
                                                <div className="cabinet-item-phase">{item.phase}</div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            {/* Shelf wood plank */}
                            <div className="shelf-wood">
                                <span className="shelf-label">SHELF 01</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* === Shelf 2 === */}
                    <motion.div
                        className="shelf"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="shelf-plank">
                            <div className="shelf-items">
                                {shelfBottom.map((item) => {
                                    const Illust = item.Illust;
                                    return (
                                        <motion.div
                                            key={item.number}
                                            className="cabinet-item"
                                            variants={fadeUp}
                                        >
                                            <Illust className="cabinet-item-illust" />
                                            <div className="cabinet-item-label">
                                                <div className="cabinet-item-number">No. {item.number}</div>
                                                <div className="cabinet-item-title">{item.title}</div>
                                                <div className="cabinet-item-sub">{item.sub}</div>
                                                <div className="cabinet-item-desc">{item.desc}</div>
                                                <div className="cabinet-item-note">{item.note}</div>
                                                <div className="cabinet-item-phase">{item.phase}</div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <div className="shelf-wood">
                                <span className="shelf-label">SHELF 02</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer inside cabinet */}
                    <footer className="cabinet-footer">
                        <span>© 2026 COCKTAIL OS</span>
                        <span className="footer-hand">Built with care ✦</span>
                    </footer>

                    {/* Base molding */}
                    <div className="cabinet-base" />
                </div>
            </div>
        </div>
    );
}
