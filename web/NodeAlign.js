import { app } from "../../scripts/app.js";

const MENU_SELECTORS = [".comfyui-menu", ".comfy-menu", '[data-testid="comfy-menu"]'];
const CANVAS_SELECTORS = ["#graph-canvas", "canvas#graph-canvas", "canvas.litegraph", '[data-testid="graph-canvas"]'];

const icons = {
    bottom: `<svg viewBox="0 0 1170 1024"><path d="M1170.285714 987.428571a36.571429 36.571429 0 0 0-36.571428-36.571428H36.571429a36.571429 36.571429 0 0 0 0 73.142857h1097.142857a36.571429 36.571429 0 0 0 36.571428-36.571429z m-219.428571-146.285714v-512a36.571429 36.571429 0 0 0-36.571429-36.571428h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571428v512a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z m-438.857143 0V36.571429a36.571429 36.571429 0 0 0-36.571429-36.571429h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571429v804.571428a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z" fill="#666"/></svg>`,
    centerX: `<svg viewBox="0 0 1243 1024"><path d="M548.571429 472.356571h146.285714V231.643429a36.571429 36.571429 0 0 1 36.571428-36.571429h219.428572a36.571429 36.571429 0 0 1 36.571428 36.571429v240.713142h179.785143a39.643429 39.643429 0 0 1 0 79.286858H987.428571v240.713142a36.571429 36.571429 0 0 1-36.571428 36.571429h-219.428572a36.571429 36.571429 0 0 1-36.571428-36.571429V551.64571h-146.285714V950.857143a36.571429 36.571429 0 0 1-36.571429 36.571428H292.571429a36.571429 36.571429 0 0 1-36.571429-36.571428V551.643429H76.214857a39.643429 39.643429 0 1 1 0-79.286858H256V73.142857A36.571429 36.571429 0 0 1 292.571429 36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571428v399.213714z" fill="#666"/></svg>`,
    centerY: `<svg viewBox="0 0 1024 1024"><path d="M477.312 576V448H266.688a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h210.624V34.688a34.688 34.688 0 0 1 69.376 0V192h210.624a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v128H896a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v157.312a34.688 34.688 0 0 1-69.376 0V832H128a32 32 0 0 1-32-32v-192A32 32 0 0 1 128 576h349.312z" fill="#666"/></svg>`,
    left: `<svg viewBox="0 0 1024 1024"><path d="M96 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32A32 32 0 0 1 96 0z m128 192h448a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-448a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32z m0 384h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-704a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32z" fill="#666"/></svg>`,
    right: `<svg viewBox="0 0 1024 1024"><path d="M928 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32a32 32 0 0 1 32-32z m-576 192h448a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-448a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32z m-256 384h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-192A32 32 0 0 1 96 576z" fill="#666"/></svg>`,
    top: `<svg viewBox="0 0 1170 1024"><path d="M1170.285714 36.571429a36.571429 36.571429 0 0 1-36.571428 36.571428H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571429z m-219.428571 146.285714v512a36.571429 36.571429 0 0 1-36.571429 36.571428h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571428v-512a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z m-438.857143 0v804.571428a36.571429 36.571429 0 0 1-36.571429 36.571429h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571429v-804.571428a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z" fill="#666"/></svg>`,
    equalW: `<svg viewBox="0 0 1088 1024"><path d="M978.24 480a42.688 42.688 0 0 1-42.688 42.688H172.928a42.688 42.688 0 0 1-42.688-42.688V213.312c0-23.552 19.072-42.624 42.688-42.624h762.624c23.552 0 42.688 19.072 42.688 42.624V480z" fill="#666"/><path d="M256.96 734.144c0-14.08 11.456-25.6 25.6-25.6h543.36a25.6 25.6 0 0 1 0 51.2h-543.36a25.6 25.6 0 0 1-25.6-25.6z" fill="#666"/><path d="M136.64 745.216a12.8 12.8 0 0 1 0-22.144l184.192-106.368a12.8 12.8 0 0 1 19.2 11.072v212.736a12.8 12.8 0 0 1-19.2 11.072l-184.192-106.368zM971.84 745.216a12.8 12.8 0 0 0 0-22.144l-184.256-106.368a12.8 12.8 0 0 0-19.2 11.072v212.736a12.8 12.8 0 0 0 19.2 11.072l184.256-106.368z" fill="#666"/></svg>`,
    equalH: `<svg viewBox="0 0 1088 1024"><path d="M572.16 936a42.688 42.688 0 0 1-42.688-42.688V130.688c0-23.616 19.136-42.688 42.688-42.688h266.688c23.552 0 42.624 19.072 42.624 42.688v762.624a42.688 42.688 0 0 1-42.624 42.688H572.16z" fill="#666"/><path d="M318.016 214.72c14.08 0 25.6 11.456 25.6 25.6v543.36a25.6 25.6 0 1 1-51.2 0v-543.36c0-14.144 11.456-25.6 25.6-25.6z" fill="#666"/><path d="M306.944 94.4a12.8 12.8 0 0 1 22.144 0l106.368 184.192a12.8 12.8 0 0 1-11.072 19.2H211.648a12.8 12.8 0 0 1-11.072-19.2l106.368-184.192zM306.944 929.6a12.8 12.8 0 0 0 22.144 0l106.368-184.192a12.8 12.8 0 0 0-11.072-19.2H211.648a12.8 12.8 0 0 0-11.072 19.2l106.368 184.192z" fill="#666"/></svg>`,
    distX: `<svg viewBox="0 0 1024 1024"><path d="M96 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32A32 32 0 0 1 96 0z m832 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32a32 32 0 0 1 32-32zM384 800v-576a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32z" fill="#666"/></svg>`,
    distY: `<svg viewBox="0 0 1170 1024"><path d="M1170.285714 36.571429a36.571429 36.571429 0 0 1-36.571428 36.571428H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571429z m0 950.857142a36.571429 36.571429 0 0 1-36.571428 36.571429H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571428zM256 365.714286h658.285714a36.571429 36.571429 0 0 1 36.571429 36.571428v219.428572a36.571429 36.571429 0 0 1-36.571429 36.571428h-658.285714a36.571429 36.571429 0 0 1-36.571429-36.571428v-219.428572a36.571429 36.571429 0 0 1 36.571429-36.571428z" fill="#666"/></svg>`
};

const NodeAlignFull = {
    initialized: false,
    toolbar: null,
    menu: null,
    canvasEl: null,
    insertionIndicator: null,
    dragState: { active: false, offsetX: 0, offsetY: 0 },
    position: { leftPct: 50, topPct: 5, attached: false, insertIndex: 0 },
    rememberPosition: true,
    displayRaf: null,

    async init() {
        if (this.initialized) return;
        await this.waitForDom();
        this.logCompat();
        this.loadPosition();
        this.injectStyles();
        this.buildToolbar();
        this.applyLayoutSettings();
        this.restorePosition();
        this.bindCanvasEvents();
        this.bindShortcuts();
        this.initialized = true;
        this.updateDisplay();
    },

    waitForDom() {
        return new Promise(resolve => {
            const tick = () => {
                this.menu = MENU_SELECTORS.map(sel => document.querySelector(sel)).find(Boolean);
                this.canvasEl = app.canvas?.canvas || CANVAS_SELECTORS.map(sel => document.querySelector(sel)).find(Boolean);
                if (this.menu && this.canvasEl) return resolve();
                requestAnimationFrame(tick);
            };
            tick();
        });
    },

    getSetting(key, fallback) {
        const v = app.ui?.settings?.getSettingValue?.(key);
        return v ?? fallback;
    },

    loadPosition() {
        this.rememberPosition = this.getSetting("NodeAlign.RememberPosition", true);
        const saved = this.rememberPosition ? JSON.parse(localStorage.getItem("NodeAlignFullPosition") || "{}") : {};
        this.position.leftPct = saved.leftPct ?? 50;
        this.position.topPct = saved.topPct ?? 5;
        this.position.attached = saved.attached ?? false;
        this.position.insertIndex = saved.insertIndex ?? 0;
        if (!this.rememberPosition) localStorage.removeItem("NodeAlignFullPosition");
    },

    savePosition() {
        if (!this.rememberPosition) return;
        localStorage.setItem("NodeAlignFullPosition", JSON.stringify(this.position));
    },

    injectStyles() {
        if (document.getElementById("nodealign-full-style")) return;
        const dividerColor = this.getSetting("NodeAlign.NodeAlignDividerColor", "666");
        const style = document.createElement("style");
        style.id = "nodealign-full-style";
        style.textContent = `
            #nodealign-full-toolbar{display:flex;align-items:center;gap:4px;padding:4px;border-radius:4px;z-index:10000;white-space:nowrap;user-select:none;pointer-events:auto;flex-wrap:nowrap;}
            #nodealign-full-toolbar.floating{position:fixed;}
            #nodealign-full-toolbar.attached{position:relative;margin-left:10px;}
            .nodealign-btn{width:var(--nodealign-btn-size,25px);height:var(--nodealign-btn-size,25px);display:flex;align-items:center;justify-content:center;background-color:var(--nodealign-icon-bg);border:none;cursor:pointer;padding:0;border-radius:4px;transition:background-color .2s ease,transform .1s ease;flex-shrink:0;position:relative;overflow:hidden;}
            .nodealign-btn svg{width:66%;height:66%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
            .nodealign-divider{width:var(--nodealign-divider-w,3px);height:var(--nodealign-divider-h,15px);background:#${dividerColor};border-radius:9px;cursor:grab;flex-shrink:0;}
            .nodealign-divider:active{cursor:grabbing;}
            .comfy-menu,.comfyui-menu{position:relative;display:flex;align-items:center;}
        `;
        document.head.appendChild(style);
    },

    buildToolbar() {
        if (document.getElementById("nodealign-full-toolbar")) return;
        const bg = this.getSetting("NodeAlign.NodeAlignBackgroundColor", "1b1b1b");
        const opacity = this.getSetting("NodeAlign.NodeAlignBackgroundOpacity", 70) / 100;
        const iconBg = this.getSetting("NodeAlign.NodeAlignIconBackgroundColor", "2a2a2a");
        const iconColor = this.getSetting("NodeAlign.NodeAlignIconColor", "e0e0e0");

        this.toolbar = document.createElement("div");
        this.toolbar.id = "nodealign-full-toolbar";
        this.toolbar.classList.add(this.position.attached ? "attached" : "floating");
        this.toolbar.style.setProperty("--nodealign-icon-bg", `#${iconBg}`);
        this.toolbar.style.background = `rgba(${parseInt(bg.slice(0,2),16)}, ${parseInt(bg.slice(2,4),16)}, ${parseInt(bg.slice(4,6),16)}, ${opacity})`;

        const addBtn = (id, icon, action, title) => {
            const el = document.createElement("button");
            el.className = "nodealign-btn";
            el.id = id;
            el.title = title || "";
            el.innerHTML = icon.replace(/#666/g, `#${iconColor}`);
            el.addEventListener("click", action);
            el.addEventListener("mouseover", () => el.style.backgroundColor = this.adjustColor(iconBg, 60));
            el.addEventListener("mouseout", () => el.style.backgroundColor = `#${iconBg}`);
            el.addEventListener("mousedown", () => el.style.transform = "scale(0.95)");
            el.addEventListener("mouseup", () => el.style.transform = "");
            el.addEventListener("mouseleave", () => el.style.transform = "");
            this.toolbar.appendChild(el);
        };

        const addDivider = () => {
            const div = document.createElement("div");
            div.className = "nodealign-divider";
            div.addEventListener("mousedown", e => this.onDragStart(e));
            div.addEventListener("dblclick", () => this.resetPosition(true));
            this.toolbar.appendChild(div);
        };

        addBtn("align-left", icons.left, () => this.align("left"), "Align Left");
        addBtn("align-centerY", icons.centerY, () => this.align("centerY"), "Align Center Vertically");
        addBtn("align-right", icons.right, () => this.align("right"), "Align Right");
        addDivider();
        addBtn("align-top", icons.top, () => this.align("top"), "Align Top");
        addBtn("align-centerX", icons.centerX, () => this.align("centerX"), "Align Center Horizontally");
        addBtn("align-bottom", icons.bottom, () => this.align("bottom"), "Align Bottom");
        addDivider();
        addBtn("equal-w", icons.equalW, () => this.equal("w"), "Equal Width");
        addBtn("equal-h", icons.equalH, () => this.equal("h"), "Equal Height");
        addDivider();
        addBtn("dist-x", icons.distX, () => this.distribute("x"), "Horizontal Distribution");
        addBtn("dist-y", icons.distY, () => this.distribute("y"), "Vertical Distribution");

        this.insertionIndicator = document.createElement("div");
        this.insertionIndicator.id = "nodealign-insert-indicator";
        this.menu.appendChild(this.insertionIndicator);

        this.toolbar.addEventListener("dblclick", () => this.resetPosition(false));

        if (this.position.attached) {
            const children = Array.from(this.menu.children).filter(c => c !== this.insertionIndicator);
            const idx = Math.min(this.position.insertIndex, children.length);
            this.menu.insertBefore(this.toolbar, children[idx] || null);
        } else {
            document.body.appendChild(this.toolbar);
        }

        document.addEventListener("mousemove", e => this.onDragging(e));
        document.addEventListener("mouseup", () => this.onDragEnd());
        document.addEventListener("selectstart", e => this.dragState.active && e.preventDefault());
    },

    adjustColor(hex, delta) {
        const c = hex.padEnd(6, "0");
        const r = parseInt(c.slice(0,2),16);
        const g = parseInt(c.slice(2,4),16);
        const b = parseInt(c.slice(4,6),16);
        const bright = Math.round(0.299*r + 0.587*g + 0.114*b);
        const adj = bright > 127 ? -delta : delta;
        return `#${[r,g,b].map(v => Math.max(0, Math.min(255, v+adj)).toString(16).padStart(2,"0")).join("")}`;
    },

    getSelectedNodes() {
        const pools = [app.canvas?.selected_nodes, app.graph?.canvas?.selected_nodes, app.graph?.selected_nodes];
        const out = [];
        for (const pool of pools) {
            if (!pool) continue;
            if (pool instanceof Map || pool instanceof Set) out.push(...pool.values());
            else if (Array.isArray(pool)) out.push(...pool);
            else if (typeof pool === "object") out.push(...Object.values(pool));
        }
        return out.filter(n => n && n.pos && n.size);
    },

    align(mode) {
        const nodes = this.getSelectedNodes();
        if (nodes.length < 2) return;
        if (mode === "left") {
            const minX = Math.min(...nodes.map(n => n.pos[0]));
            nodes.forEach(n => n.pos[0] = minX);
        } else if (mode === "right") {
            const maxX = Math.max(...nodes.map(n => n.pos[0] + n.size[0]));
            nodes.forEach(n => n.pos[0] = maxX - n.size[0]);
        } else if (mode === "top") {
            const minY = Math.min(...nodes.map(n => n.pos[1]));
            nodes.forEach(n => n.pos[1] = minY);
        } else if (mode === "bottom") {
            const maxY = Math.max(...nodes.map(n => n.pos[1] + n.size[1]));
            nodes.forEach(n => n.pos[1] = maxY - n.size[1]);
        } else if (mode === "centerX") {
            const minY = Math.min(...nodes.map(n => n.pos[1]));
            const maxY = Math.max(...nodes.map(n => n.pos[1] + n.size[1]));
            const c = (minY + maxY) / 2;
            nodes.forEach(n => n.pos[1] = c - n.size[1] / 2);
        } else if (mode === "centerY") {
            const minX = Math.min(...nodes.map(n => n.pos[0]));
            const maxX = Math.max(...nodes.map(n => n.pos[0] + n.size[0]));
            const c = (minX + maxX) / 2;
            nodes.forEach(n => n.pos[0] = c - n.size[0] / 2);
        }
        this.redraw();
    },

    equal(axis) {
        const nodes = this.getSelectedNodes();
        if (nodes.length < 2) return;
        if (axis === "w") {
            const w = nodes[0].size[0];
            nodes.forEach(n => n.size[0] = w);
        } else {
            const h = nodes[0].size[1];
            nodes.forEach(n => n.size[1] = h);
        }
        this.redraw();
    },

    distribute(axis) {
        const nodes = this.getSelectedNodes();
        if (nodes.length < 2) {
            console.info("[NodeAlign] Distribution skipped: need 2+ nodes");
            return;
        }
        const idx = axis === "x" ? 0 : 1;
        const sorted = [...nodes].sort((a, b) => a.pos[idx] - b.pos[idx]);
        const min = Math.min(...sorted.map(n => n.pos[idx]));
        const max = Math.max(...sorted.map(n => n.pos[idx] + n.size[idx]));
        const total = sorted.reduce((s, n) => s + n.size[idx], 0);
        const gap = (max - min - total) / Math.max(1, sorted.length - 1);
        let cursor = min;
        sorted.forEach(n => {
            n.pos[idx] = cursor;
            cursor += n.size[idx] + gap;
        });
        console.info("[NodeAlign] Distribution", { axis, nodes: sorted.length, gap });
        this.redraw();
    },

    redraw() {
        if (app.canvas?.setDirty) app.canvas.setDirty(true, true);
        if (app.graph?.setDirtyCanvas) app.graph.setDirtyCanvas(true);
    },

    updateDisplay() {
        if (!this.toolbar) return;
        const mode = this.getSetting("NodeAlign.NodeAlignDisplayMode", "permanent");
        const selected = this.getSelectedNodes().length;
        if (mode === "disabled") this.toolbar.style.display = "none";
        else if (mode === "on-select" && selected < 2) this.toolbar.style.display = "none";
        else this.toolbar.style.display = "flex";
    },

    queueDisplayUpdate() {
        if (this.displayRaf) return;
        this.displayRaf = requestAnimationFrame(() => {
            this.displayRaf = null;
            this.updateDisplay();
        });
    },

    onDragStart(e) {
        e.preventDefault();
        const rect = this.toolbar.getBoundingClientRect();
        this.dragState.active = true;
        this.dragState.offsetX = e.clientX - rect.left;
        this.dragState.offsetY = e.clientY - rect.top;
    },

    onDragging(e) {
        if (!this.dragState.active) return;
        const rect = this.toolbar.getBoundingClientRect();
        const menuRect = this.menu.getBoundingClientRect();
        const winW = window.innerWidth;
        const winH = window.innerHeight;

        if (this.position.attached) this.detach(true);

        let left = e.clientX - this.dragState.offsetX;
        let top = e.clientY - this.dragState.offsetY;
        left = Math.max(0, Math.min(left, winW - rect.width));
        top = Math.max(0, Math.min(top, winH - rect.height));
        this.toolbar.style.left = `${left}px`;
        this.toolbar.style.top = `${top}px`;

        const tbBottom = rect.top + rect.height;
        if (tbBottom > menuRect.top && rect.top < menuRect.bottom) {
            this.insertionIndicator.style.display = "block";
            const children = Array.from(this.menu.children).filter(c => c !== this.insertionIndicator && c !== this.toolbar);
            const tbCenter = rect.left + rect.width / 2;
            let indicatorLeft = 0;
            for (let i = 0; i < children.length; i++) {
                const childRect = children[i].getBoundingClientRect();
                if (tbCenter < childRect.left + childRect.width / 2) {
                    indicatorLeft = childRect.left - menuRect.left;
                    break;
                }
                indicatorLeft = children[children.length - 1]?.getBoundingClientRect().right - menuRect.left || 0;
            }
            this.insertionIndicator.style.left = `${Math.max(0, Math.min(indicatorLeft, menuRect.width - this.insertionIndicator.offsetWidth))}px`;
        } else {
            this.insertionIndicator.style.display = "none";
        }
    },

    onDragEnd() {
        if (!this.dragState.active) return;
        this.dragState.active = false;
        const rect = this.toolbar.getBoundingClientRect();
        const menuRect = this.menu.getBoundingClientRect();
        const inMenu = rect.top + rect.height > menuRect.top && rect.top < menuRect.bottom;

        if (inMenu) {
            const children = Array.from(this.menu.children).filter(c => c !== this.insertionIndicator && c !== this.toolbar);
            const tbCenter = rect.left + rect.width / 2;
            let idx = 0;
            for (let i = 0; i < children.length; i++) {
                const childRect = children[i].getBoundingClientRect();
                if (tbCenter < childRect.left + childRect.width / 2) { idx = i; break; }
                idx = i + 1;
            }
            this.attach(children[idx]);
            this.position.attached = true;
            this.position.insertIndex = idx;
        } else {
            this.position.leftPct = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
            this.position.topPct = (rect.top / window.innerHeight) * 100;
            this.position.attached = false;
            this.position.insertIndex = 0;
            this.updateFloatingPosition();
        }

        this.savePosition();
        this.insertionIndicator.style.display = "none";
    },

    resetPosition(fromDivider) {
        this.position = { leftPct: 50, topPct: 5, attached: false, insertIndex: 0 };
        this.detach(true);
        this.savePosition();
    },

    attach(target) {
        this.position.attached = true;
        this.toolbar.classList.remove("floating");
        this.toolbar.classList.add("attached");
        this.toolbar.style.left = "";
        this.toolbar.style.top = "";
        this.menu.insertBefore(this.toolbar, target || null);
    },

    detach(isDrag) {
        if (!isDrag) return;
        this.position.attached = false;
        this.toolbar.classList.remove("attached");
        this.toolbar.classList.add("floating");
        document.body.appendChild(this.toolbar);
        this.updateFloatingPosition();
    },

    updateFloatingPosition() {
        if (!this.toolbar || this.position.attached) return;
        const rect = this.toolbar.getBoundingClientRect();
        const left = (this.position.leftPct / 100) * window.innerWidth - rect.width / 2;
        const top = (this.position.topPct / 100) * window.innerHeight;
        this.toolbar.style.left = `${Math.max(0, Math.min(left, window.innerWidth - rect.width))}px`;
        this.toolbar.style.top = `${Math.max(0, Math.min(top, window.innerHeight - rect.height))}px`;
    },

    restorePosition() {
        if (this.position.attached && this.menu && this.toolbar) {
            const children = Array.from(this.menu.children).filter(c => c !== this.insertionIndicator && c !== this.toolbar);
            const idx = Math.min(this.position.insertIndex, children.length);
            this.attach(children[idx]);
        } else {
            this.position.attached = false;
            this.updateFloatingPosition();
        }
    },

    bindCanvasEvents() {
        const refresh = () => this.queueDisplayUpdate();
        this.canvasEl?.addEventListener("pointerup", refresh);
        this.canvasEl?.addEventListener("click", refresh);
    },

    bindShortcuts() {
        document.addEventListener("keydown", e => {
            if (!e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
            const enable = this.getSetting("NodeAlign.EnableAlignmentShortcuts", true);
            if (!enable || this.getSelectedNodes().length < 2) return;
            const key = e.key.toLowerCase();
            if (["w","a","s","d"].includes(key)) e.preventDefault();
            if (key === "w") this.align("top");
            if (key === "a") this.align("left");
            if (key === "s") this.align("bottom");
            if (key === "d") this.align("right");
        });
    },

    logCompat() {
        const menuSel = MENU_SELECTORS.find(sel => document.querySelector(sel));
        const canvasSel = CANVAS_SELECTORS.find(sel => document.querySelector(sel));
        console.info("[NodeAlign] init", { menuSelector: menuSel, canvasSelector: canvasSel, rememberPosition: this.getSetting("NodeAlign.RememberPosition", true) });
    },

    applyLayoutSettings() {
        if (!this.toolbar) return;
        const size = Number(this.getSetting("NodeAlign.ButtonSize", 25)) || 25;
        const dividerH = Math.round(size * 0.6);
        const dividerW = Math.max(2, Math.round(size * 0.13));
        const finalOrientation = "horizontal";
        this.toolbar.style.setProperty("--nodealign-btn-size", `${size}px`);
        this.toolbar.style.setProperty("--nodealign-divider-h", `${dividerH}px`);
        this.toolbar.style.setProperty("--nodealign-divider-w", `${dividerW}px`);
        console.info("[NodeAlign] layout", { size, orientation: finalOrientation });
    }
};

app.registerExtension({
    name: "NodeAlign.NodeAlignFull",
    init() {
        NodeAlignFull.init();
        window.NodeAlignFull = NodeAlignFull;
    }
});
