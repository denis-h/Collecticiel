export class Patient {
    private id: string;
    private name: string;
    private birthDate: string;

    constructor() {
        this.id = "";
        this.name = "";
        this.birthDate = "";
    }
    
    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getBirthDate(): string {
        return this.birthDate;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setSpecialty(birthDate: string): void {
        this.birthDate = birthDate;
    }
}