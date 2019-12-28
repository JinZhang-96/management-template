

/**
 * 路由节点
 */
export class RouterNode {
    private _text: String;
    private _url: String;

    constructor(private t:String, private u: String) {
        this._text = t;
        this._url = u;
    }

    get text() {
        return this._text;
    }

    set text(_text) {
        this._text = _text;
    }


    get url() {
        return this._url;
    }

    set url(_url) {
        this._url = _url;
    }

}
