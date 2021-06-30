class NewsArticle {
    constructor(title, text, date) {
        this.title = title;
        this.text = text;
        this.date = date;
    }

    tags = [];

    addTag(name) {
        this.tags.push(name);
    }

    print() {
        document.write('<article>');
        document.write(`<h1>${this.title}</h1>`);
        document.write(`<p>${this.text}</p>`);
        document.write('<ul>');
        for (const tag of this.tags) {
            document.write(`<li>${tag}</li>`);
        }
        document.write('</ul>');
        document.write(`<time>${this.date}</time>`);
        document.write('</article>');
    }
}

class NewsFeed {
    articles = [];

    addArticle(article) {
        this.articles.push(article);
    }

    removeArticle() {
        this.articles.pop();
    }

    get count() {
        return this.articles.length;
    }

    print() {
        document.write('<main>');
        document.write(`<p>Количество новостей: ${this.count}</p > `)
        for (const article of this.articles) {
            article.print();
        }
        document.write('</main>');
    }

    getArticlesByTag(tag) {
        this.articles.filter((article) => article.tags.includes(tag));
    }
}

const article1 = new NewsArticle(
    'Klubnichka won!',
    'Spanish guy won 20 million euro',
    '29.05.2021'
);

article1.addTag('lottery');
article1.addTag('lucky man');

const article2 = new NewsArticle(
    'Шок!',
    'Бітрут академія - спонсор ПромПриладу',
    '21.04.2020'
);

article2.addTag('sensation');

const article3 = new NewsArticle(
    'Жах! Просто жах! Соковита полуничка',
    'В Коломиї з\'явилась полуниця з Херсону',
    '02.03.2020'
);

article3.addTag('полуничка');
article3.addTag('теплична');
article3.addTag('безкоштовно');

const feed = new NewsFeed();
feed.addArticle(article1);
feed.addArticle(article2);
feed.addArticle(article3);

feed.print();


