declare namespace NwJs {

    interface MenuItem {
        //
    }

    interface MenuItemConstructor {
        new (options: any): MenuItem;
    }

    interface WindowObject {
        moveTo(x, y): void;
        moveBy(x, y): void;
        resizeTo(width, height): void;
        resizeBy(width, height): void;
        focus(): void;
        blur(): void;
        show([is_show]): void;
        hide(): void;
        close([force]): void;
        reload(): void;
        reloadDev(): void;
        reloadIgnoringCache(): void;
        maximize(): void;
        unmaximize(): void;
        minimize(): void;
        restore(): void;
        enterFullscreen(): void;
        leaveFullscreen(): void;
        toggleFullscreen(): void;
        enterKioskMode(): void;
        leaveKioskMode(): void;
        toggleKioskMode(): void;
        setTransparent(transparent): void;
        showDevTools([iframe], [callback]): void;
        closeDevTools(): void;
        getPrinters(callback): void;
        isDevToolsOpen(): void;
        print(options): void;
        setMaximumSize(width, height): void;
        setMinimumSize(width, height): void;
        setResizable(resizable): void;
        setAlwaysOnTop(top): void;
        setVisibleOnAllWorkspaces(visible): void;
        canSetVisibleOnAllWorkspaces(): void;
        setPosition(position): void;
        setShowInTaskbar(show): void;
        requestAttention(attension): void;
        capturePage(callback, config?): void;
        setProgressBar(progress): void;
        setBadgeLabel(label): void;
        eval(frame, script): void;
        evalNWBin(frame, path): void;
    }

    interface Window {
        get():WindowObject;

    }

    interface Menu {
        append(item: any): void;
        popup(x: number, y: number): void;
    }

    interface MenuConstructor {
        new (): Menu;
    }

    interface NW {
        Menu: MenuConstructor;
        MenuItem: MenuItemConstructor;
        Window:Window
    }
}

declare module 'nw.gui' {
    const nw: NwJs.NW;
    export = nw;
}

declare var nw: NwJs.NW;
