class Singleton {
    private static instance: Singleton;
    private value: number = 0;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public static setValue(value: number): void {
        Singleton.instance.value = value;
    }
    public static getValue(): number {
        return Singleton.instance.value;
    }
}

const main = () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    Singleton.setValue(1);

    console.log(instance1 === instance2); // true
    console.log(Singleton.getValue()); // 1
}
main()

