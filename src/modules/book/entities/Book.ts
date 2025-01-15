interface BookSchema {
    id?: number;
    title: string;
    author: string;
    year_of_publication: number;
    gender: string
}

export class Book {
    private props: BookSchema;

    constructor(props: BookSchema) {
        this.props = {...props};
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get title(): string {
        return this.props.title;
    }

    set title(title: string) {
        this.props.title = title;
    }

    get author(): string {
        return this.props.author;
    }

    set author(author: string) {
        this.props.author = author;
    }

    get year_of_publication(): number {
        return this.props.year_of_publication;
    }

    set year_of_publication(year_of_publication: number) {
        this.props.year_of_publication = year_of_publication;
    }

    get gender(): string {
        return this.props.gender;
    }

    set gender(gender: string) {
        this.props.gender = gender;
    }
}