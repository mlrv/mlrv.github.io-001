$(function () {
    let jqconsole = $('#console').jqconsole('', 'λ ');

    function process(input) {
        let parsed = input.split(' ');

        switch (parsed[0].toLowerCase()) {
            case '?':
            case 'ls':
            case 'help':
                return text.help();
            case 'whoareyou':
                return text.whoareyou;
            case 'exp':
                return text.exp();
            case 'cv':
                return text.cv();
            case 'source':
                return text.source();
            case 'now':
                return text.now;
            case 'books':
                return text.books();
            case 'eggs':
                return text.eggs();
            case 'thanks':
                return text.thanks;
            case 'contact':
                return text.contact;
            case 'colors':
                return text.colors();
            case 'destroy':
                return eggs.destroy();
            case 'flip':
                return eggs.flip();
            case 'matrix':
                return eggs.matrix();
            case 'music':
                return music.play();
            default:
                return text.notRight;
        }
    }

    const startPrompt = function () {
        jqconsole.Prompt(true, function (input) {
            if (input) {
                jqconsole.Write(process(input), 'jqconsole-output', false);
            } else {
                jqconsole.Write(text.notRight, 'jqconsole-output');
            }
            startPrompt();
        });
    };

    eggs.unleashTheRabbit();

    startPrompt();

    jqconsole.RegisterShortcut('Z', function () {
        this.Reset();
        startPrompt();
    });
});