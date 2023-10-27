module.exports = {
    html: function (name, list, body, control) {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${name}</title>
        </head>
        <body>
            <h1><a href="/">2학년 3반 인기투표</a></h1>
                ${list}
                ${control}
                ${body}
        </body>
        </html>`}
    , list: function (files) {
        let list = '<ol>'
        for (let i = 0; i < files.length; i++) {
            list = list + `<li><a href='?name=${files[i]}'>${files[i]}</a></li>`
        }
        list = list + '</ol>'
        return list
    }
    , create:function(){
        return `<form action="/create_process" method="post">
        <p><input type="text" name="title" id="#" placeholder="title"></p>
        <p><textarea name="description" id="#" cols="30" rows="10" placeholder="description"></textarea></p>
        <p><button type="submit">send</button></p>
        </form>`
    }
    , update:function(name, content){
        return `<form action="/update_process" method="post">
        <p><input type="hidden" name="id" id="#" value=${name}></p>
        <p><input type="text" name="title" id="#" placeholder="title" value=${name}></p>
        <p><textarea name="description" id="#" cols="30" rows="10" placeholder="description">${content}</textarea></p>
        <p><button type="submit">send</button></p>
        </form>`
    }
}