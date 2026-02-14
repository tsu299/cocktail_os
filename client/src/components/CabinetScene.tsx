/**
 * CabinetScene — 一整幅酒櫃插畫
 *
 * 一個完整的 SVG，包含：
 * - 木製櫃體框架（含裝飾線條）
 * - 三層架板
 * - 架上放滿物品（瓶、杯、書、骰子、地圖、燒瓶、植物⋯）
 * - 每組物品對應一個功能模組，是 hover zone
 *
 * 物品分佈：
 *   Top shelf:    [書+酒杯 = 百科]  [瓶子排列 = 酒櫃]
 *   Mid shelf:    [搖酒器+骰子 = 靈感]  [地圖+筆 = 跑吧]
 *   Bot shelf:    [三角燒瓶+植物 = AI]  [裝飾小物]
 */

interface CabinetSceneProps {
    /** 目前 hover 中的 zone id，null 表示沒有 */
    activeZone: string | null;
    /** hover 進入某個 zone */
    onZoneEnter: (id: string) => void;
    /** hover 離開 */
    onZoneLeave: () => void;
}

export default function CabinetScene({
    activeZone,
    onZoneEnter,
    onZoneLeave,
}: CabinetSceneProps) {
    const zoneProps = (id: string) => ({
        onMouseEnter: () => onZoneEnter(id),
        onMouseLeave: () => onZoneLeave(),
        style: {
            cursor: "pointer",
            transition: "filter 0.25s, opacity 0.25s",
            filter: activeZone === id ? "brightness(1.08)" : "none",
            opacity: activeZone && activeZone !== id ? 0.7 : 1,
        } as React.CSSProperties,
    });

    return (
        <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto", display: "block" }}
        >
            {/* ===========================
          CABINET BODY
          =========================== */}
            {/* Back panel */}
            <rect x="40" y="20" width="720" height="560" rx="4" fill="#f0ebe5" />
            {/* Subtle wall paper pattern */}
            <pattern id="wallpaper" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="0.5" fill="#d8d0c8" opacity="0.4" />
            </pattern>
            <rect x="55" y="35" width="690" height="530" fill="url(#wallpaper)" />

            {/* Left side panel */}
            <rect x="40" y="20" width="15" height="560" fill="#7a5c48" />
            <rect x="40" y="20" width="15" height="560" fill="url(#woodGrain)" opacity="0.3" />
            <rect x="40" y="20" width="4" height="560" fill="#9c7c62" opacity="0.5" />
            {/* Right side panel */}
            <rect x="745" y="20" width="15" height="560" fill="#7a5c48" />
            <rect x="745" y="20" width="15" height="560" fill="url(#woodGrain)" opacity="0.3" />
            <rect x="756" y="20" width="4" height="560" fill="#5c4033" opacity="0.4" />

            {/* Top crown */}
            <rect x="35" y="15" width="730" height="20" rx="3" fill="#7a5c48" />
            <rect x="35" y="15" width="730" height="8" rx="2" fill="#9c7c62" opacity="0.5" />
            <rect x="35" y="15" width="730" height="3" fill="#b89878" opacity="0.5" />
            {/* Decorative line */}
            <line x1="60" y1="30" x2="740" y2="30" stroke="#5c4033" strokeWidth="0.5" opacity="0.3" />

            {/* Bottom base */}
            <rect x="35" y="575" width="730" height="16" rx="2" fill="#7a5c48" />
            <rect x="35" y="585" width="730" height="6" rx="2" fill="#5c4033" opacity="0.5" />
            {/* Feet */}
            <rect x="55" y="591" width="30" height="9" rx="4" fill="#5c4033" />
            <rect x="715" y="591" width="30" height="9" rx="4" fill="#5c4033" />

            {/* Wood grain pattern definition */}
            <defs>
                <pattern id="woodGrain" patternUnits="userSpaceOnUse" width="6" height="600">
                    <line x1="1" y1="0" x2="1" y2="600" stroke="#5c4033" strokeWidth="0.3" opacity="0.2" />
                    <line x1="3.5" y1="0" x2="3.5" y2="600" stroke="#5c4033" strokeWidth="0.2" opacity="0.1" />
                    <line x1="5" y1="0" x2="5" y2="600" stroke="#3e2a1e" strokeWidth="0.15" opacity="0.08" />
                </pattern>
            </defs>

            {/* ===========================
          SHELVES (3 layers)
          =========================== */}
            {/* Shelf 1 — y=200 */}
            <rect x="52" y="195" width="696" height="14" fill="#9c7c62" />
            <rect x="52" y="195" width="696" height="5" fill="#b89878" opacity="0.5" />
            <rect x="52" y="207" width="696" height="5" rx="1" fill="#5c4033" opacity="0.5" />
            <line x1="52" y1="210" x2="748" y2="210" stroke="#3e2a1e" strokeWidth="0.5" opacity="0.2" />

            {/* Shelf 2 — y=385 */}
            <rect x="52" y="380" width="696" height="14" fill="#9c7c62" />
            <rect x="52" y="380" width="696" height="5" fill="#b89878" opacity="0.5" />
            <rect x="52" y="392" width="696" height="5" rx="1" fill="#5c4033" opacity="0.5" />
            <line x1="52" y1="395" x2="748" y2="395" stroke="#3e2a1e" strokeWidth="0.5" opacity="0.2" />

            {/* ===========================
          TOP SHELF objects (y=40..195)
          Zone: wiki (left half), bar (right half)
          =========================== */}

            {/* -- ZONE: wiki — books + cocktail glass -- */}
            <g {...zoneProps("wiki")}>
                {/* Stack of books */}
                <rect x="90" y="130" width="80" height="62" rx="2" fill="#e8d8c0" stroke="#7a5c48" strokeWidth="1" />
                <rect x="90" y="130" width="80" height="10" rx="1" fill="#c8a888" stroke="#7a5c48" strokeWidth="0.5" />
                {/* Book 1 — lying flat (red-brown) */}
                <rect x="85" y="155" width="90" height="14" rx="2" fill="#c89080" stroke="#8a6050" strokeWidth="0.8" />
                <rect x="88" y="158" width="30" height="3" rx="1" fill="#fdfbf8" opacity="0.3" />
                {/* Book 2 — lying flat (olive) */}
                <rect x="88" y="141" width="78" height="13" rx="2" fill="#b0b890" stroke="#78804a" strokeWidth="0.8" />
                <rect x="92" y="144" width="25" height="2.5" rx="1" fill="#fdfbf8" opacity="0.3" />
                {/* Book 3 — standing upright (navy blue) */}
                <rect x="95" y="60" width="18" height="70" rx="2" fill="#7888a8" stroke="#506080" strokeWidth="0.8" />
                <rect x="99" y="65" width="10" height="3" rx="1" fill="#c0c8d8" opacity="0.4" />
                <rect x="99" y="72" width="10" height="2" rx="1" fill="#c0c8d8" opacity="0.3" />
                {/* Book 4 — standing upright (burgundy) */}
                <rect x="116" y="72" width="14" height="58" rx="2" fill="#a07068" stroke="#705048" strokeWidth="0.8" />
                {/* Book 5 — standing thin */}
                <rect x="133" y="80" width="8" height="50" rx="1" fill="#c0a888" stroke="#907858" strokeWidth="0.6" />

                {/* Cocktail glass sitting on books */}
                <path d="M155 120 L175 120 L165 145 L165 160 L160 163 L170 163" stroke="#7a5c48" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M158 124 Q165 120 172 124 L165 140Z" fill="#f0c4d4" opacity="0.4" />
                <path d="M159 124 Q165 122 171 124" stroke="#d4a0a0" strokeWidth="0.5" opacity="0.5" />
                {/* Cherry garnish */}
                <circle cx="172" cy="120" r="4" fill="#c87070" stroke="#905050" strokeWidth="0.6" opacity="0.7" />
                <path d="M172 116 Q175 110 178 108" stroke="#5e7a56" strokeWidth="0.6" />

                {/* Small plant in pot */}
                <rect x="185" y="166" width="22" height="26" rx="3" fill="#c89880" stroke="#8a6848" strokeWidth="0.8" />
                <path d="M196 166 C196 152 188 142 186 136" stroke="#5e7a56" strokeWidth="1" fill="none" />
                <path d="M186 136 C182 130 180 124 186 124 C192 124 188 132 186 136Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.6" />
                <path d="M196 165 C196 154 200 146 204 140" stroke="#5e7a56" strokeWidth="0.8" fill="none" />
                <path d="M204 140 C208 134 212 136 208 142 C204 148 200 142 204 140Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.5" />
            </g>

            {/* -- ZONE: bar — bottles collection -- */}
            <g {...zoneProps("bar")}>
                {/* Tall bottle — amber */}
                <rect x="320" y="62" width="26" height="130" rx="3" fill="#f5d5b8" stroke="#7a5c48" strokeWidth="1" />
                <rect x="326" y="42" width="14" height="22" rx="2" fill="#e8d0b0" stroke="#7a5c48" strokeWidth="0.8" />
                <ellipse cx="333" cy="42" rx="8" ry="3" fill="#c8a080" stroke="#7a5c48" strokeWidth="0.6" />
                <rect x="324" y="90" width="18" height="28" rx="1.5" fill="#fdfbf8" stroke="#c8b898" strokeWidth="0.5" />
                <path d="M328 98 Q333 96 338 98" stroke="#a09080" strokeWidth="0.4" />
                <path d="M328 103 Q333 105 338 103" stroke="#a09080" strokeWidth="0.4" />
                <path d="M328 108 Q333 106 338 108" stroke="#a09080" strokeWidth="0.4" />

                {/* Round bottle — rose wine */}
                <path d="M380 192 L380 110 Q380 75 405 62 Q430 75 430 110 L430 192" fill="#f5e0e4" stroke="#7a5c48" strokeWidth="1" />
                <rect x="393" y="42" width="14" height="22" rx="2" fill="#e0c8c8" stroke="#7a5c48" strokeWidth="0.8" />
                <rect x="390" y="100" width="30" height="36" rx="3" fill="#fdfbf8" stroke="#b09080" strokeWidth="0.5" />
                <path d="M396 112 Q405 108 414 112 Q405 116 396 112Z" stroke="#c8a888" strokeWidth="0.4" fill="#f5eed8" opacity="0.5" />
                {/* Wine level */}
                <path d="M383 148 Q405 142 427 148 L430 192 L380 192Z" fill="#e0a0b0" opacity="0.2" />

                {/* Short wide bottle — green herbal */}
                <rect x="455" y="110" width="40" height="82" rx="4" fill="#c8dcc0" stroke="#7a5c48" strokeWidth="1" />
                <rect x="465" y="90" width="20" height="22" rx="2" fill="#b0c8a0" stroke="#7a5c48" strokeWidth="0.8" />
                <ellipse cx="475" cy="90" rx="12" ry="4" fill="#90a880" stroke="#5e7a56" strokeWidth="0.6" />
                <rect x="461" y="130" width="28" height="22" rx="2" fill="#fdfbf8" stroke="#90a890" strokeWidth="0.5" />
                <rect x="465" y="136" width="20" height="2" rx="1" fill="#90a890" opacity="0.4" />
                <rect x="467" y="142" width="16" height="2" rx="1" fill="#90a890" opacity="0.3" />

                {/* Small bottle — dark */}
                <rect x="510" y="118" width="18" height="74" rx="2" fill="#8090a0" stroke="#506070" strokeWidth="0.8" />
                <rect x="514" y="105" width="10" height="15" rx="1.5" fill="#708090" stroke="#506070" strokeWidth="0.6" />

                {/* Decanter — crystal */}
                <path d="M555 192 L555 130 Q555 100 575 85 Q595 100 595 130 L595 192" fill="#e8eef4" stroke="#7a5c48" strokeWidth="1" opacity="0.7" />
                <rect x="568" y="68" width="14" height="20" rx="2" fill="#d8e0e8" stroke="#7a5c48" strokeWidth="0.8" />
                <ellipse cx="575" cy="68" rx="10" ry="6" fill="#b8c0c8" stroke="#7a5c48" strokeWidth="0.6" opacity="0.6" />
                {/* Glint */}
                <path d="M562 120 L562 160" stroke="white" strokeWidth="1.5" opacity="0.15" />

                {/* Two small shot glasses */}
                <path d="M630 180 L644 180 L640 192 L634 192Z" fill="#e8eef4" stroke="#7a5c48" strokeWidth="0.6" opacity="0.6" />
                <path d="M655 178 L669 178 L665 192 L659 192Z" fill="#e8eef4" stroke="#7a5c48" strokeWidth="0.6" opacity="0.6" />
                <path d="M656 182 Q662 180 668 182" stroke="#f5d5b8" strokeWidth="0.4" opacity="0.3" />
            </g>

            {/* ===========================
          MIDDLE SHELF objects (y=210..380)
          Zone: dice (left), map (right)
          =========================== */}

            {/* -- ZONE: dice — shaker + dice + glasses -- */}
            <g {...zoneProps("dice")}>
                {/* Cocktail shaker — metallic */}
                <rect x="100" y="250" width="40" height="125" rx="5" fill="#d8d0c8" stroke="#7a5c48" strokeWidth="1.2" />
                <rect x="104" y="254" width="6" height="116" rx="2" fill="white" opacity="0.08" />
                <rect x="106" y="228" width="28" height="24" rx="3" fill="#c8c0b8" stroke="#7a5c48" strokeWidth="1" />
                <line x1="98" y1="252" x2="142" y2="252" stroke="#7a5c48" strokeWidth="1" />
                {/* Cap */}
                <rect x="112" y="210" width="16" height="20" rx="2" fill="#b8b0a8" stroke="#7a5c48" strokeWidth="0.8" />
                <ellipse cx="120" cy="210" rx="10" ry="4" fill="#c8c0b8" stroke="#7a5c48" strokeWidth="0.6" />
                {/* Bands */}
                <line x1="102" y1="280" x2="138" y2="280" stroke="#9c8c78" strokeWidth="0.6" opacity="0.5" />
                <line x1="102" y1="282" x2="138" y2="282" stroke="#9c8c78" strokeWidth="0.6" opacity="0.5" />
                <line x1="102" y1="350" x2="138" y2="350" stroke="#9c8c78" strokeWidth="0.6" opacity="0.5" />

                {/* Dice 1 */}
                <g transform="rotate(-8 200 340)">
                    <rect x="170" y="320" width="45" height="45" rx="6" fill="#f5eed8" stroke="#7a5c48" strokeWidth="1" />
                    <circle cx="183" cy="333" r="3" fill="#6b5e50" opacity="0.5" />
                    <circle cx="202" cy="333" r="3" fill="#6b5e50" opacity="0.5" />
                    <circle cx="192.5" cy="342.5" r="3" fill="#6b5e50" opacity="0.5" />
                    <circle cx="183" cy="352" r="3" fill="#6b5e50" opacity="0.5" />
                    <circle cx="202" cy="352" r="3" fill="#6b5e50" opacity="0.5" />
                </g>

                {/* Dice 2 — smaller, behind */}
                <g transform="rotate(5 255 355)">
                    <rect x="230" y="338" width="36" height="36" rx="5" fill="#e8e0d5" stroke="#7a5c48" strokeWidth="0.8" />
                    <circle cx="243" cy="350" r="2.5" fill="#6b5e50" opacity="0.4" />
                    <circle cx="255" cy="350" r="2.5" fill="#6b5e50" opacity="0.4" />
                    <circle cx="243" cy="362" r="2.5" fill="#6b5e50" opacity="0.4" />
                    <circle cx="255" cy="362" r="2.5" fill="#6b5e50" opacity="0.4" />
                </g>

                {/* Jigger / measure cup */}
                <path d="M160 365 L178 365 L174 378 L164 378Z" fill="#c8c0b0" stroke="#7a5c48" strokeWidth="0.7" />
                <ellipse cx="169" cy="365" rx="9" ry="3" fill="#d8d0c0" stroke="#7a5c48" strokeWidth="0.5" />

                {/* Bar spoon */}
                <line x1="275" y1="235" x2="285" y2="375" stroke="#a09080" strokeWidth="1.2" strokeLinecap="round" />
                <ellipse cx="275" cy="233" rx="5" ry="8" fill="none" stroke="#a09080" strokeWidth="0.8" />
            </g>

            {/* -- ZONE: map — map scroll + pen + compass -- */}
            <g {...zoneProps("map")}>
                {/* Rolled map / scroll */}
                <rect x="420" y="260" width="200" height="115" rx="4" fill="#f5eed8" stroke="#a09080" strokeWidth="0.8" />
                {/* Map fold lines */}
                <line x1="520" y1="262" x2="520" y2="373" stroke="#c8b898" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.4" />
                <line x1="420" y1="320" x2="618" y2="320" stroke="#c8b898" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.4" />
                {/* Map route */}
                <path d="M445 350 Q470 330 490 335 Q520 340 540 310 Q560 280 590 275" stroke="#5e7a56" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" fill="none" opacity="0.5" />
                {/* Pin markers */}
                <circle cx="445" cy="350" r="4" fill="#c87070" stroke="#905050" strokeWidth="0.6" />
                <circle cx="540" cy="310" r="3.5" fill="#7888a8" stroke="#506080" strokeWidth="0.6" />
                <circle cx="590" cy="275" r="4" fill="#b8a040" stroke="#907820" strokeWidth="0.6" />
                {/* Map edge curl */}
                <path d="M618 260 Q625 260 625 268 L618 268Z" fill="#e8d8c0" stroke="#a09080" strokeWidth="0.3" />
                <path d="M420 375 Q413 375 413 367 L420 367Z" fill="#e8d8c0" stroke="#a09080" strokeWidth="0.3" />

                {/* Pen / fountain pen */}
                <line x1="640" y1="240" x2="660" y2="377" stroke="#3e2a1e" strokeWidth="2" strokeLinecap="round" />
                <path d="M660 377 L662 385 L658 385Z" fill="#3e2a1e" />
                <rect x="638" y="250" width="6" height="15" rx="1" fill="#b89878" stroke="#7a5c48" strokeWidth="0.4" />

                {/* Small notebook */}
                <rect x="670" y="310" width="50" height="65" rx="2" fill="#d0c0a8" stroke="#7a5c48" strokeWidth="0.8" />
                <rect x="670" y="310" width="10" height="65" rx="1" fill="#b8a888" stroke="#7a5c48" strokeWidth="0.4" />
                <line x1="685" y1="325" x2="712" y2="325" stroke="#a09080" strokeWidth="0.4" opacity="0.4" />
                <line x1="685" y1="333" x2="715" y2="333" stroke="#a09080" strokeWidth="0.4" opacity="0.4" />
                <line x1="685" y1="341" x2="710" y2="341" stroke="#a09080" strokeWidth="0.4" opacity="0.4" />
                <line x1="685" y1="349" x2="712" y2="349" stroke="#a09080" strokeWidth="0.4" opacity="0.4" />
                <line x1="685" y1="357" x2="708" y2="357" stroke="#a09080" strokeWidth="0.4" opacity="0.4" />

                {/* Compass */}
                <circle cx="385" cy="320" r="22" fill="#f0ece4" stroke="#7a5c48" strokeWidth="0.8" />
                <circle cx="385" cy="320" r="18" fill="none" stroke="#b09878" strokeWidth="0.5" />
                <line x1="385" y1="304" x2="385" y2="336" stroke="#c87070" strokeWidth="0.6" opacity="0.5" />
                <line x1="369" y1="320" x2="401" y2="320" stroke="#7a5c48" strokeWidth="0.4" opacity="0.4" />
                <path d="M385 304 L382 318 L385 316 L388 318Z" fill="#c87070" opacity="0.4" />
                <circle cx="385" cy="320" r="2" fill="#7a5c48" opacity="0.5" />
            </g>

            {/* ===========================
          BOTTOM SHELF objects (y=395..575)
          Zone: ai (center)
          =========================== */}

            {/* -- ZONE: ai — flask + plants + butterflies -- */}
            <g {...zoneProps("ai")}>
                {/* Erlenmeyer flask */}
                <path d="M340 430 L340 480 L290 555 Q285 565 295 568 L425 568 Q435 565 430 555 L380 480 L380 430" stroke="#7a5c48" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
                <line x1="332" y1="430" x2="388" y2="430" stroke="#7a5c48" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M340 480 L290 555 Q285 565 295 568 L425 568 Q435 565 430 555 L380 480Z" fill="#d0e0f0" opacity="0.15" />
                {/* Liquid */}
                <path d="M305 540 Q340 530 360 535 Q380 540 415 540 L425 555 Q430 565 425 568 L295 568 Q285 565 290 555Z" fill="#b8ceea" opacity="0.2" />
                <path d="M308 538 Q340 528 360 533 Q380 538 412 538" stroke="#8090b0" strokeWidth="0.6" opacity="0.3" />
                {/* Bubbles */}
                <circle cx="330" cy="550" r="4" fill="#d0bcf5" opacity="0.12" stroke="#8878a8" strokeWidth="0.5" />
                <circle cx="350" cy="545" r="2.5" fill="#b8ceea" opacity="0.12" stroke="#6080a0" strokeWidth="0.4" />
                <circle cx="375" cy="555" r="5" fill="#f0c4d4" opacity="0.1" stroke="#c08888" strokeWidth="0.5" />
                <circle cx="395" cy="548" r="2" fill="#b8dcc8" opacity="0.12" stroke="#5e7a56" strokeWidth="0.4" />

                {/* Vine growing from flask — left */}
                <path d="M340 430 C330 410 315 395 300 390" stroke="#5e7a56" strokeWidth="1.2" fill="none" />
                <path d="M300 390 C290 382 280 386 286 396 C292 406 298 394 300 390Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.6" opacity="0.6" />
                <path d="M315 395 C308 386 310 378 318 382 C326 386 318 396 315 395Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.5" opacity="0.5" />
                {/* Flower */}
                <circle cx="282" cy="386" r="6" fill="#f5d5b8" opacity="0.4" stroke="#c09060" strokeWidth="0.5" />
                <circle cx="282" cy="386" r="2.5" fill="#c09060" opacity="0.35" />

                {/* Vine — right */}
                <path d="M380 430 C392 408 410 395 425 390" stroke="#5e7a56" strokeWidth="1.2" fill="none" />
                <path d="M425 390 C436 382 442 390 434 398 C426 406 420 394 425 390Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.6" opacity="0.6" />
                {/* Flower with petals */}
                <circle cx="440" cy="384" r="7" fill="#f0c4d4" opacity="0.3" stroke="#c08888" strokeWidth="0.5" />
                <path d="M434 384 Q440 377 446 384 Q440 391 434 384Z" fill="#f5d0d8" opacity="0.3" />
                <path d="M440 377 Q447 384 440 391 Q433 384 440 377Z" fill="#f5d0d8" opacity="0.3" />
                <circle cx="440" cy="384" r="2.5" fill="#d08090" opacity="0.4" />

                {/* Butterfly */}
                <g transform="translate(460 420) rotate(-10)">
                    <path d="M0 0 C-12 -12 -20 -5 -14 3 C-8 10 -3 5 0 0Z" fill="#b8ceea" stroke="#6080a0" strokeWidth="0.6" opacity="0.4" />
                    <path d="M0 0 C-10 6 -15 16 -8 15 C-1 14 -1 5 0 0Z" fill="#d0bcf5" stroke="#8070a0" strokeWidth="0.6" opacity="0.35" />
                    <path d="M0 0 C12 -12 20 -5 14 3 C8 10 3 5 0 0Z" fill="#d0bcf5" stroke="#8070a0" strokeWidth="0.6" opacity="0.4" />
                    <path d="M0 0 C10 6 15 16 8 15 C1 14 1 5 0 0Z" fill="#f0c4d4" stroke="#c08888" strokeWidth="0.6" opacity="0.35" />
                    <line x1="0" y1="-3" x2="0" y2="6" stroke="#6b5e50" strokeWidth="0.6" opacity="0.4" />
                    <path d="M0 -3 C-3 -9 -6 -11 -7 -9" stroke="#6b5e50" strokeWidth="0.4" fill="none" opacity="0.3" />
                    <path d="M0 -3 C3 -9 6 -11 7 -9" stroke="#6b5e50" strokeWidth="0.4" fill="none" opacity="0.3" />
                </g>

                {/* Mortar and pestle */}
                <path d="M180 530 Q180 510 195 505 Q210 500 225 505 Q240 510 240 530 L240 568 L180 568Z" fill="#d0c8c0" stroke="#7a5c48" strokeWidth="0.8" />
                <ellipse cx="210" cy="530" rx="30" ry="8" fill="#c0b8b0" stroke="#7a5c48" strokeWidth="0.6" />
                <line x1="215" y1="525" x2="230" y2="480" stroke="#7a5c48" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="232" cy="478" rx="6" ry="4" fill="#9c8c78" stroke="#7a5c48" strokeWidth="0.5" />

                {/* Small bottles cluster */}
                <rect x="530" y="498" width="16" height="70" rx="2" fill="#e0d0f0" stroke="#7a5c48" strokeWidth="0.7" />
                <ellipse cx="538" cy="498" rx="9" ry="3" fill="#c8b8d8" stroke="#7a5c48" strokeWidth="0.4" />
                <rect x="560" y="510" width="14" height="58" rx="2" fill="#d0e0c8" stroke="#7a5c48" strokeWidth="0.7" />
                <rect x="585" y="520" width="12" height="48" rx="2" fill="#e8d0c0" stroke="#7a5c48" strokeWidth="0.7" />

                {/* Herbs / dried flowers in jar */}
                <path d="M630 568 L630 505 Q630 498 640 498 L660 498 Q670 498 670 505 L670 568" fill="#e8e0d5" stroke="#7a5c48" strokeWidth="0.8" opacity="0.6" />
                <path d="M626 498 L674 498" stroke="#7a5c48" strokeWidth="0.8" />
                {/* Herbs sticking out */}
                <path d="M640 498 C638 485 635 475 630 468" stroke="#5e7a56" strokeWidth="0.8" fill="none" />
                <path d="M650 498 C650 480 654 470 658 462" stroke="#5e7a56" strokeWidth="0.8" fill="none" />
                <path d="M660 498 C662 488 668 480 672 474" stroke="#5e7a56" strokeWidth="0.8" fill="none" />
                <path d="M630 468 C626 462 628 456 634 458 C640 460 634 468 630 468Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.4" opacity="0.5" />
                <path d="M658 462 C660 454 666 454 664 462" stroke="#5e7a56" strokeWidth="0.4" fill="#c8e8d0" opacity="0.4" />
                <circle cx="672" cy="474" r="3" fill="#f0c4d4" stroke="#c08888" strokeWidth="0.3" opacity="0.4" />
            </g>

            {/* ===========================
          AMBIENT DECORATIONS (always visible)
          =========================== */}
            {/* Cabinet interior shadow at top */}
            <rect x="55" y="35" width="690" height="8" fill="url(#topShadow)" opacity="0.3" />
            <defs>
                <linearGradient id="topShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3e2a1e" />
                    <stop offset="100%" stopColor="#3e2a1e" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}
