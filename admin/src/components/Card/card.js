export default class Card {
    constructor(image, text, user) {
        this._image = image;
        this._text = text;
        this._user = user;
    }

    get image() {
        return this._image;
    }

    set image(image) {
        this._image = image;
    }

    get text() {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }
}
