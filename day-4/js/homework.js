const book = {
    title: "The Guide",
    author: "R. K. Narayan",
    year: 1958,
    pages: 240,
    summary() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
};

const key = "title";

console.log(book[key]);

const lines = [];
lines.push(`Variable key: ${JSON.stringify(key)}`);
lines.push(`book[key] (title): ${book[key]}`);
lines.push("");
lines.push("summary():");
lines.push(book.summary());

document.querySelector("#homeworkOutput").textContent = lines.join("\n");
