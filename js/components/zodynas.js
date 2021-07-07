class Zodynas {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;

        this.init();
    }
    init() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR:nerasti domenys');
            return false;
        }
        this.render();
        this.addEvents();

    }


    generateInputForm() {
        return `<h1>Žodynas EN -LT</h1>
        <form class="virsus">
        <input class="enZodis" placeholder="type EN word" type="text">
        <input class="ltZodis" placeholder="type LT word" type="text">
        <button class="btn save">Save</button>
        <button class="btn reset">Reset</button>
    </form>`;
    }
    generateUpdateForm() {
        return `<form class="edit hiden">
        <input class="updateEnZodis" placeholder="type EN word" type="text">
        <input class="updateLtZodis" placeholder="type LT word" type="text">
        <button class="btn update">Update</button>
        <button class="btn cancel">Cancel</button>
    </form>`
    }
    generateSavedTable() {
        return `<h1>Užsaugota </h1>
        <table style="width:100%">
        <tr>
            <th>EN</th>
            <th>LT</th>
            <th>
                Action
            </th>
        </tr>
        <tr>
            <td>Dog</td>
            <td>Suo</td>
            <td class="action">
                <button class="fa fa-pencil"></button>
                <button class="fa fa-trash-o"></button>
            </td>
        </tr>
    </table>`;
    }
    render() {
        console.log('kuku');
        let HTML = '';
        HTML += this.generateInputForm();
        HTML += this.generateUpdateForm();
        HTML += this.generateSavedTable();
        this.DOM.innerHTML = HTML;
    }
    addEvents() {


    }

}

export { Zodynas }