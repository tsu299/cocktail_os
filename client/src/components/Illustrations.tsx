/**
 * Mucha-inspired SVG illustrations — rich color, watercolor fills
 * Designed to overflow their containers for organic feel
 */

interface Props {
    className?: string;
}

/**
 * 01 調酒百科 — 翻開的書 + 酒杯 + 花飾
 */
export function IllustWiki({ className }: Props) {
    return (
        <svg className={className} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background halo */}
            <circle cx="110" cy="105" r="90" fill="#e8dff0" opacity="0.3" />
            <circle cx="110" cy="105" r="70" fill="#d4c8e2" opacity="0.12" />

            {/* Decorative arc */}
            <path d="M30 185 Q30 30 110 18 Q190 30 190 185" stroke="#8b7ba0" strokeWidth="1" fill="none" opacity="0.15" />

            {/* Open book — warm parchment fill */}
            <path d="M55 155 C55 155 50 78 58 68 C66 60 100 58 108 65 C116 58 150 60 158 68 C166 78 161 155 161 155Z" fill="#f5eed8" stroke="#6b5e50" strokeWidth="1.4" />
            <path d="M108 65 L108 155" stroke="#6b5e50" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4" />
            {/* Page tint */}
            <path d="M58 68 C66 60 100 58 108 65 L108 155 L55 155 C55 155 50 78 58 68Z" fill="#f8f2e0" opacity="0.5" />

            {/* Book text lines - left */}
            <path d="M66 82 L100 80" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M66 90 L100 88" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M66 98 L96 96" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M66 106 L98 104" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M66 114 L100 112" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M66 122 L94 120" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            {/* Book text lines - right */}
            <path d="M116 80 L148 82" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M116 88 L148 90" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M116 96 L146 98" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />
            <path d="M116 104 L148 106" stroke="#a09585" strokeWidth="0.6" opacity="0.4" />

            {/* Cocktail coupe glass — rose-gold fill */}
            <path d="M120 50 L140 50 L130 70 L130 80" stroke="#7a5c48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M125 80 L135 80" stroke="#7a5c48" strokeWidth="1.2" strokeLinecap="round" />
            {/* Liquid in glass */}
            <path d="M123 54 Q130 50 137 54 L130 66Z" fill="#f0c4d4" opacity="0.5" />
            <path d="M124 54 Q130 52 136 54" stroke="#d4a0a0" strokeWidth="0.6" opacity="0.5" />

            {/* Art Nouveau vine from glass — colorful */}
            <path d="M140 50 C148 40 158 32 162 22 C166 12 156 8 148 16 C140 24 152 34 146 44" stroke="#5e7a56" strokeWidth="1.2" fill="none" />
            {/* Leaf — green watercolor */}
            <path d="M162 22 C168 14 178 18 174 28 C170 38 160 30 162 22Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.8" opacity="0.7" />
            <path d="M162 22 Q170 18 174 28" stroke="#5e7a56" strokeWidth="0.6" />
            {/* Smaller leaf */}
            <path d="M148 16 C142 10 146 4 152 8 C158 12 150 18 148 16Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.6" opacity="0.5" />
            {/* Flower — pastel rose */}
            <circle cx="178" cy="22" r="6" fill="#f0c4d4" opacity="0.4" stroke="#c08888" strokeWidth="0.6" />
            <circle cx="178" cy="22" r="3" fill="#f5d0d8" opacity="0.5" />
            <circle cx="178" cy="22" r="1.5" fill="#c08888" opacity="0.4" />

            {/* Left vine — Art Nouveau curve */}
            <path d="M55 155 C40 145 32 125 36 108 C40 90 52 86 48 72 C44 58 36 50 40 40" stroke="#5e7a56" strokeWidth="0.9" fill="none" opacity="0.35" />
            {/* Leaf cluster left */}
            <path d="M40 40 C34 34 30 26 36 24 C42 22 42 32 40 40Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.5" opacity="0.45" />
            <path d="M36 108 C28 104 24 96 30 94 C36 92 36 102 36 108Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.5" opacity="0.35" />
            {/* Small flower */}
            <circle cx="34" cy="24" r="4" fill="#f5d5b8" opacity="0.35" stroke="#c09060" strokeWidth="0.4" />
            <circle cx="34" cy="24" r="1.5" fill="#c09060" opacity="0.3" />

            {/* Bottom ornament */}
            <path d="M60 175 Q88 168 110 170 Q132 172 160 175" stroke="#a09585" strokeWidth="0.5" opacity="0.15" />
            <circle cx="110" cy="170" r="2.5" fill="#d0bcf5" opacity="0.3" stroke="#8b7ba0" strokeWidth="0.4" />

            {/* Sparkles */}
            <circle cx="90" cy="42" r="1.2" fill="#d0bcf5" opacity="0.35" />
            <circle cx="168" cy="48" r="1" fill="#f5d5b8" opacity="0.3" />
        </svg>
    );
}

/**
 * 02 我的酒櫃 — 酒瓶在架上 + 花飾
 */
export function IllustBar({ className }: Props) {
    return (
        <svg className={className} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Warm halo */}
            <ellipse cx="110" cy="100" rx="85" ry="80" fill="#f5eed8" opacity="0.25" />

            {/* Shelf */}
            <path d="M30 90 L190 90" stroke="#7a5c48" strokeWidth="2" strokeLinecap="round" />
            <rect x="30" y="90" width="160" height="4" fill="#9c7c62" rx="1" opacity="0.4" />
            <path d="M30 150 L190 150" stroke="#7a5c48" strokeWidth="2" strokeLinecap="round" />
            <rect x="30" y="150" width="160" height="4" fill="#9c7c62" rx="1" opacity="0.4" />

            {/* === Top shelf bottles === */}
            {/* Tall bottle — amber liquor */}
            <path d="M50 89 L50 42 Q50 34 54 32 L62 32 Q66 34 66 42 L66 89" stroke="#6b5e50" strokeWidth="1.3" fill="none" />
            <rect x="48" y="42" width="20" height="46" rx="1" fill="#f5d5b8" opacity="0.35" />
            <path d="M54 32 L54 24 Q54 22 58 22 Q62 22 62 24 L62 32" stroke="#6b5e50" strokeWidth="1" fill="none" />
            {/* Label */}
            <rect x="52" y="52" width="12" height="18" rx="1" fill="#fdfbf8" stroke="#c8b898" strokeWidth="0.5" />
            <path d="M54 58 Q58 56 62 58" stroke="#a09080" strokeWidth="0.4" opacity="0.5" />
            <path d="M54 62 Q58 64 62 62" stroke="#a09080" strokeWidth="0.4" opacity="0.5" />

            {/* Round bottle — rose wine */}
            <path d="M90 89 L90 58 Q90 42 104 36 Q118 42 118 58 L118 89" stroke="#6b5e50" strokeWidth="1.3" fill="none" />
            <path d="M90 58 Q90 42 104 36 Q118 42 118 58 L118 89 L90 89Z" fill="#f0c4d4" opacity="0.25" />
            <path d="M98 36 L98 26 Q98 24 104 24 Q110 24 110 26 L110 36" stroke="#6b5e50" strokeWidth="1" fill="none" />
            {/* Ornamental label */}
            <ellipse cx="104" cy="64" rx="10" ry="7" fill="#fdfbf8" stroke="#b09080" strokeWidth="0.5" />
            <path d="M98 62 Q104 58 110 62 Q104 66 98 62Z" stroke="#c8a888" strokeWidth="0.4" fill="#f5eed8" opacity="0.4" />

            {/* Wide decanter — green herbal */}
            <path d="M140 89 L140 56 Q140 44 150 40 L156 40 Q166 44 166 56 L166 89" stroke="#6b5e50" strokeWidth="1.3" fill="none" />
            <path d="M140 56 Q140 44 150 40 L156 40 Q166 44 166 56 L166 89 L140 89Z" fill="#b8dcc8" opacity="0.25" />
            <path d="M150 40 L150 30 Q150 28 153 26 Q156 28 156 30 L156 40" stroke="#6b5e50" strokeWidth="1" fill="none" />
            {/* Stopper */}
            <ellipse cx="153" cy="26" rx="5" ry="3" fill="#9c7c62" stroke="#6b5e50" strokeWidth="0.6" opacity="0.5" />
            <rect x="144" y="60" width="18" height="12" rx="1" fill="#fdfbf8" stroke="#90a890" strokeWidth="0.5" />

            {/* === Bottom shelf === */}
            {/* Coupe glass — golden cocktail */}
            <path d="M48 149 L64 149 L56 128 L56 116 L52 113 L60 113" stroke="#6b5e50" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M50 145 Q56 141 62 145 L56 130Z" fill="#f5d5b8" opacity="0.4" />

            {/* Mixing jar — blue curaçao */}
            <path d="M90 149 L90 110 Q90 106 95 106 L115 106 Q120 106 120 110 L120 149" stroke="#6b5e50" strokeWidth="1.2" fill="none" />
            <rect x="90" y="106" width="30" height="43" rx="2" fill="#b8ceea" opacity="0.2" />
            <path d="M86 106 L124 106" stroke="#6b5e50" strokeWidth="1" strokeLinecap="round" />
            {/* Liquid line */}
            <path d="M92 128 Q105 124 118 128" stroke="#8baac0" strokeWidth="0.6" opacity="0.4" />
            {/* Stirring spoon */}
            <path d="M112 106 L114 92 L115 86" stroke="#9c7c62" strokeWidth="0.8" opacity="0.5" />
            <circle cx="115" cy="85" r="2" stroke="#9c7c62" strokeWidth="0.6" fill="none" opacity="0.4" />

            {/* Small bitters bottle — lavender */}
            <path d="M148 149 L148 120 Q148 116 152 116 L160 116 Q164 116 164 120 L164 149" stroke="#6b5e50" strokeWidth="1.2" fill="none" />
            <rect x="148" y="116" width="16" height="33" rx="1" fill="#d0bcf5" opacity="0.2" />
            <rect x="150" y="124" width="12" height="10" rx="1" fill="#fdfbf8" stroke="#a090b0" strokeWidth="0.5" />

            {/* Art Nouveau vine on right side */}
            <path d="M175 150 C182 135 186 118 184 102 C182 86 176 80 180 68" stroke="#5e7a56" strokeWidth="0.8" fill="none" opacity="0.3" />
            <path d="M184 102 C190 96 196 100 192 108 C188 116 182 108 184 102Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.5" opacity="0.45" />
            <path d="M180 68 C186 62 192 66 188 74 C184 80 178 72 180 68Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.5" opacity="0.4" />
            {/* Flower */}
            <circle cx="192" cy="62" r="4" fill="#f0c4d4" opacity="0.35" stroke="#c08888" strokeWidth="0.4" />
            <circle cx="192" cy="62" r="1.5" fill="#c08888" opacity="0.3" />

            {/* Bottom ornament */}
            <path d="M60 170 Q110 164 160 170" stroke="#a09585" strokeWidth="0.4" opacity="0.12" />
        </svg>
    );
}

/**
 * 03 靈感骰子 — 搖酒器 + 骰子 + 彩帶
 */
export function IllustDice({ className }: Props) {
    return (
        <svg className={className} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Circular glow */}
            <circle cx="100" cy="110" r="80" fill="#f5eaf0" opacity="0.25" />

            {/* Decorative circle */}
            <circle cx="100" cy="110" r="88" stroke="#a0889a" strokeWidth="0.5" fill="none" opacity="0.12" />

            {/* Shaker body — metallic */}
            <path d="M65 60 L65 148 Q65 162 80 162 L98 162 Q113 162 113 148 L113 60" stroke="#6b5e50" strokeWidth="1.5" fill="none" />
            <rect x="65" y="60" width="48" height="102" rx="3" fill="#e8e0d5" opacity="0.35" />
            {/* Shaker shine */}
            <rect x="70" y="62" width="6" height="96" rx="2" fill="white" opacity="0.12" />

            {/* Cap */}
            <path d="M70 60 L70 44 Q70 36 80 36 L98 36 Q108 36 108 44 L108 60" stroke="#6b5e50" strokeWidth="1.3" fill="none" />
            <rect x="70" y="36" width="38" height="24" rx="3" fill="#d8d0c8" opacity="0.3" />
            <path d="M63 60 L115 60" stroke="#6b5e50" strokeWidth="1.2" strokeLinecap="round" />

            {/* Top knob */}
            <path d="M82 36 L82 26 Q82 22 89 22 Q96 22 96 26 L96 36" stroke="#6b5e50" strokeWidth="1.1" fill="none" />
            <ellipse cx="89" cy="22" rx="6" ry="3.5" fill="#c8b898" stroke="#6b5e50" strokeWidth="0.7" opacity="0.6" />

            {/* Decorative bands */}
            <path d="M67 78 L111 78" stroke="#b09878" strokeWidth="0.8" opacity="0.4" />
            <path d="M67 80 L111 80" stroke="#b09878" strokeWidth="0.8" opacity="0.4" />
            {/* Art Nouveau wave pattern */}
            <path d="M72 100 Q80 94 89 100 Q98 106 106 100" stroke="#a09080" strokeWidth="0.7" fill="none" opacity="0.25" />
            <path d="M72 108 Q80 102 89 108 Q98 114 106 108" stroke="#a09080" strokeWidth="0.7" fill="none" opacity="0.25" />
            <path d="M67 135 L111 135" stroke="#b09878" strokeWidth="0.8" opacity="0.4" />
            <path d="M67 137 L111 137" stroke="#b09878" strokeWidth="0.8" opacity="0.4" />

            {/* Dice — warm amber with shadow */}
            <g transform="rotate(-10 158 120)">
                <rect x="130" y="96" width="42" height="42" rx="6" fill="#f5eed8" stroke="#6b5e50" strokeWidth="1.3" />
                <rect x="130" y="96" width="42" height="42" rx="6" fill="#f5d5b8" opacity="0.3" />
                {/* Dots — deep warm tone */}
                <circle cx="142" cy="108" r="3" fill="#8a6050" opacity="0.6" />
                <circle cx="160" cy="108" r="3" fill="#8a6050" opacity="0.6" />
                <circle cx="151" cy="117" r="3" fill="#8a6050" opacity="0.6" />
                <circle cx="142" cy="126" r="3" fill="#8a6050" opacity="0.6" />
                <circle cx="160" cy="126" r="3" fill="#8a6050" opacity="0.6" />
            </g>

            {/* Flowing ribbon — rose pink */}
            <path d="M113 48 C125 38 142 34 156 42 C170 50 162 62 148 58 C134 54 128 46 122 52" stroke="#c08888" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M156 42 C166 34 178 40 172 50" stroke="#c08888" strokeWidth="0.8" fill="none" opacity="0.3" />
            {/* Ribbon fill */}
            <path d="M113 48 C125 38 142 34 156 42 C162 45 160 52 148 50 C136 48 128 44 118 50Z" fill="#f0c4d4" opacity="0.2" />

            {/* Sparkle stars */}
            <path d="M50 48 L52.5 40 L55 48 L47 44 L58 44Z" fill="#d0bcf5" opacity="0.3" stroke="#8b7ba0" strokeWidth="0.4" />
            <path d="M135 78 L136.5 74 L138 78 L134 76 L140 76Z" fill="#f5d5b8" opacity="0.3" stroke="#c09060" strokeWidth="0.3" />
            <circle cx="120" cy="30" r="1.2" fill="#d0bcf5" opacity="0.3" />
            <circle cx="175" cy="80" r="1" fill="#f0c4d4" opacity="0.25" />
        </svg>
    );
}

/**
 * 04 跑吧日記 — 地圖路線 + 花飾
 */
export function IllustMap({ className }: Props) {
    return (
        <svg className={className} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background warmth */}
            <ellipse cx="110" cy="110" rx="90" ry="85" fill="#edf6f0" opacity="0.25" />

            {/* Map / parchment */}
            <rect x="25" y="32" width="170" height="156" rx="3" fill="#f5eed8" stroke="#c8b898" strokeWidth="0.8" opacity="0.6" />
            {/* Fold line */}
            <path d="M110 32 L110 188" stroke="#c8b898" strokeWidth="0.4" opacity="0.2" strokeDasharray="4 4" />
            {/* Weathered corners */}
            <path d="M25 32 L45 32 L25 52Z" fill="#e8e0d5" opacity="0.15" />
            <path d="M195 188 L175 188 L195 168Z" fill="#e8e0d5" opacity="0.15" />

            {/* Route path — colorful dashes */}
            <path d="M45 165 Q60 150 72 142 Q88 130 95 112 Q102 94 118 82 Q135 70 152 62 Q165 56 175 46" stroke="#5e7a56" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" fill="none" opacity="0.5" />
            {/* Route shadow */}
            <path d="M45 165 Q60 150 72 142 Q88 130 95 112 Q102 94 118 82 Q135 70 152 62 Q165 56 175 46" stroke="#5e7a56" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.06" />

            {/* Pin A — start — rose */}
            <path d="M45 165 Q45 145 33 145 Q21 145 21 157 Q21 165 45 182" fill="#f0c4d4" stroke="#a06070" strokeWidth="1.2" opacity="0.7" />
            <circle cx="33" cy="153" r="5" fill="white" stroke="#a06070" strokeWidth="1" />
            <circle cx="33" cy="153" r="2" fill="#a06070" opacity="0.5" />

            {/* Pin B — middle — lavender */}
            <path d="M118 82 Q118 62 106 62 Q94 62 94 74 Q94 82 118 99" fill="#d0bcf5" stroke="#7060a0" strokeWidth="1.2" opacity="0.6" />
            <circle cx="106" cy="70" r="5" fill="white" stroke="#7060a0" strokeWidth="1" />
            <circle cx="106" cy="70" r="2" fill="#7060a0" opacity="0.5" />

            {/* Pin C — end — peach */}
            <path d="M175 46 Q175 26 163 26 Q151 26 151 38 Q151 46 175 63" fill="#f5d5b8" stroke="#b08050" strokeWidth="1.2" opacity="0.7" />
            <circle cx="163" cy="34" r="5" fill="white" stroke="#b08050" strokeWidth="1" />
            <circle cx="163" cy="34" r="2" fill="#b08050" opacity="0.5" />

            {/* Tiny cocktail glass markers */}
            <path d="M78 136 L86 136 L82 146 L82 152 L80 153 L84 153" stroke="#7a5c48" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.45" />
            <path d="M82 140 Q84 138 86 140" stroke="#f0c4d4" strokeWidth="0.5" opacity="0.3" />

            <path d="M142 60 L150 60 L146 70 L146 76 L144 77 L148 77" stroke="#7a5c48" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.45" />

            {/* Art Nouveau vine from pin A — reaching up */}
            <path d="M21 157 C10 150 4 135 8 120 C12 105 22 108 18 118 C14 128 10 140 16 152" stroke="#5e7a56" strokeWidth="0.8" fill="none" opacity="0.3" />
            <path d="M8 120 C2 114 -2 106 4 104 C10 102 10 112 8 120Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.5" opacity="0.4" />
            {/* Small flower */}
            <circle cx="2" cy="104" r="3.5" fill="#f5d5b8" opacity="0.35" stroke="#c09060" strokeWidth="0.4" />
            <circle cx="2" cy="104" r="1.2" fill="#c09060" opacity="0.3" />

            {/* Vine from pin C */}
            <path d="M175 38 C185 30 192 20 190 10 C188 0 178 4 182 14 C186 24 190 30 184 38" stroke="#5e7a56" strokeWidth="0.8" fill="none" opacity="0.3" />
            <path d="M190 10 C196 4 202 10 196 18 C190 26 186 16 190 10Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.5" opacity="0.4" />
            {/* Flower */}
            <circle cx="198" cy="8" r="5" fill="#f0c4d4" opacity="0.35" stroke="#c08888" strokeWidth="0.5" />
            <circle cx="198" cy="8" r="2" fill="#d08090" opacity="0.3" />

            {/* Footstep dots */}
            <circle cx="54" cy="158" r="1.8" fill="#5e7a56" opacity="0.15" />
            <circle cx="62" cy="152" r="1.4" fill="#5e7a56" opacity="0.12" />
            <circle cx="130" cy="74" r="1.4" fill="#5e7a56" opacity="0.12" />
        </svg>
    );
}

/**
 * 05 AI 調酒師 — 實驗燒瓶 + 蝴蝶 + 花
 */
export function IllustAI({ className }: Props) {
    return (
        <svg className={className} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ethereal glow */}
            <circle cx="105" cy="100" r="85" fill="#eaf0f8" opacity="0.25" />
            <circle cx="105" cy="100" r="65" fill="#b8ceea" opacity="0.08" />

            {/* Art Nouveau nimbus */}
            <ellipse cx="105" cy="95" rx="80" ry="72" stroke="#6878a0" strokeWidth="0.5" fill="none" opacity="0.1" />

            {/* Erlenmeyer flask */}
            <path d="M85 48 L85 88 L52 150 Q48 158 56 162 L154 162 Q162 158 158 150 L125 88 L125 48" stroke="#6b5e50" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
            <path d="M78 48 L132 48" stroke="#6b5e50" strokeWidth="1.2" strokeLinecap="round" />
            {/* Flask body fill — sky tint */}
            <path d="M85 88 L52 150 Q48 158 56 162 L154 162 Q162 158 158 150 L125 88Z" fill="#b8ceea" opacity="0.15" />

            {/* Liquid — gradient effect */}
            <path d="M60 142 Q80 134 105 138 Q130 142 150 142 L154 150 Q158 158 154 162 L56 162 Q48 158 52 150Z" fill="#d0bcf5" opacity="0.2" />
            <path d="M62 140 Q85 132 105 136 Q125 140 148 140" stroke="#8878a8" strokeWidth="0.7" fill="none" opacity="0.3" />

            {/* Bubbles — colorful */}
            <circle cx="75" cy="150" r="4" fill="#d0bcf5" opacity="0.15" stroke="#8878a8" strokeWidth="0.6" />
            <circle cx="92" cy="146" r="2.5" fill="#f0c4d4" opacity="0.15" stroke="#c08888" strokeWidth="0.5" />
            <circle cx="118" cy="152" r="5" fill="#b8ceea" opacity="0.15" stroke="#6080a0" strokeWidth="0.6" />
            <circle cx="132" cy="148" r="2" fill="#b8dcc8" opacity="0.15" stroke="#5e7a56" strokeWidth="0.5" />
            <circle cx="105" cy="155" r="3" fill="#f5d5b8" opacity="0.15" stroke="#b08050" strokeWidth="0.5" />

            {/* Botanical vine LEFT — lush green */}
            <path d="M85 48 C78 34 68 24 58 20 C48 16 44 28 54 30 C64 32 72 22 80 36" stroke="#5e7a56" strokeWidth="1.2" fill="none" />
            {/* Leaf 1 */}
            <path d="M58 20 C48 12 38 16 42 26 C46 36 56 28 58 20Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.7" opacity="0.6" />
            <path d="M58 20 Q48 14 42 26" stroke="#5e7a56" strokeWidth="0.5" opacity="0.5" />
            {/* Leaf 2 */}
            <path d="M68 24 C62 14 66 6 74 12 C82 18 72 28 68 24Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.6" opacity="0.5" />
            {/* Flower — peach */}
            <circle cx="38" cy="16" r="6" fill="#f5d5b8" opacity="0.4" stroke="#c09060" strokeWidth="0.6" />
            <circle cx="38" cy="16" r="3" fill="#f8e0c8" opacity="0.5" />
            <circle cx="38" cy="16" r="1.5" fill="#c09060" opacity="0.4" />

            {/* Botanical vine RIGHT */}
            <path d="M125 48 C132 32 144 20 156 16 C168 12 172 26 160 28 C148 30 138 18 134 34" stroke="#5e7a56" strokeWidth="1.2" fill="none" />
            {/* Leaf */}
            <path d="M156 16 C166 8 176 14 170 24 C164 34 154 24 156 16Z" fill="#b8dcc8" stroke="#5e7a56" strokeWidth="0.7" opacity="0.6" />
            {/* Leaf 2 */}
            <path d="M170 24 C178 18 184 24 178 32 C172 40 166 30 170 24Z" fill="#c8e8d0" stroke="#5e7a56" strokeWidth="0.6" opacity="0.45" />
            {/* Flower — rose */}
            <circle cx="180" cy="18" r="7" fill="#f0c4d4" opacity="0.4" stroke="#c08888" strokeWidth="0.6" />
            {/* Petals */}
            <path d="M174 18 Q180 11 186 18 Q180 25 174 18Z" fill="#f5d0d8" opacity="0.3" stroke="#c08888" strokeWidth="0.4" />
            <path d="M180 11 Q187 18 180 25 Q173 18 180 11Z" fill="#f5d0d8" opacity="0.3" stroke="#c08888" strokeWidth="0.4" />
            <circle cx="180" cy="18" r="2.5" fill="#d08090" opacity="0.4" />

            {/* Butterfly — Mucha signature — colorful */}
            <g transform="translate(170, 60) rotate(-12)">
                {/* Left wing — sky blue */}
                <path d="M0 0 C-15 -14 -24 -6 -18 4 C-12 12 -4 6 0 0Z" fill="#b8ceea" stroke="#6080a0" strokeWidth="0.7" opacity="0.45" />
                <path d="M0 0 C-14 8 -18 20 -10 18 C-2 16 -2 6 0 0Z" fill="#d0bcf5" stroke="#8070a0" strokeWidth="0.7" opacity="0.35" />
                {/* Right wing — lavender */}
                <path d="M0 0 C15 -14 24 -6 18 4 C12 12 4 6 0 0Z" fill="#d0bcf5" stroke="#8070a0" strokeWidth="0.7" opacity="0.45" />
                <path d="M0 0 C14 8 18 20 10 18 C2 16 2 6 0 0Z" fill="#f0c4d4" stroke="#c08888" strokeWidth="0.7" opacity="0.35" />
                {/* Body */}
                <line x1="0" y1="-4" x2="0" y2="7" stroke="#6b5e50" strokeWidth="0.8" opacity="0.5" />
                {/* Antennae */}
                <path d="M0 -4 C-4 -12 -8 -14 -10 -12" stroke="#6b5e50" strokeWidth="0.5" fill="none" opacity="0.35" />
                <path d="M0 -4 C4 -12 8 -14 10 -12" stroke="#6b5e50" strokeWidth="0.5" fill="none" opacity="0.35" />
                <circle cx="-10" cy="-12" r="1" fill="#d0bcf5" opacity="0.4" />
                <circle cx="10" cy="-12" r="1" fill="#f0c4d4" opacity="0.4" />
            </g>

            {/* Sparkle stars */}
            <path d="M42 60 L44.5 52 L47 60 L39 56 L50 56Z" fill="#f5d5b8" opacity="0.3" stroke="#c09060" strokeWidth="0.4" />
            <circle cx="55" cy="45" r="1.2" fill="#d0bcf5" opacity="0.3" />
            <circle cx="160" cy="50" r="1" fill="#f0c4d4" opacity="0.25" />

            {/* Bottom ornament */}
            <path d="M60 182 Q82 176 105 178 Q128 180 150 182" stroke="#a09585" strokeWidth="0.5" opacity="0.12" />
            <circle cx="105" cy="178" r="2.5" fill="#b8ceea" opacity="0.2" stroke="#6080a0" strokeWidth="0.4" />
        </svg>
    );
}
