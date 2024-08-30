
export class Styles {
    constructor () {}

    public static inputDarkStyles(): string {
        return 'border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
    }

    public static divDarkStyles(): string {
        return 'flex flex-col gap-1'
    }

    public static saveButtonStyle(): string {
        return 'bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
    }

    public static mainDarkStyle(): string {
        return 'h-screen bg-zinc-950 text-zinc-300 flex flex-col gap-10 items-center justify-center'
    }

    public static formDarkStyle(): string {
        return 'flex flex-col gap-4 w-full max-w-xs'
    }
}
