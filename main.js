
class Chapter {
    constructor(title, paragraphs) {
        this.title = title
        this.paragraphs = paragraphs
    }
}
class eBook {
    constructor(hostElemId, title) {
        this.hostElemId = hostElemId
        this.title = title
        this.chapters = []
    }
    addChapter(title, paragraphs = []) {
        this.chapters.push(new Chapter(title, paragraphs))
    }

    render() {
        let ren = ''
        ren += '<div class="marvel-device iphone8plus black">'
        ren += '<div class="top-bar"></div>'
        ren += '<div class="sleep"></div>'
        ren += '<div class="volume"></div>'
        ren += '<div class="camera"></div>'
        ren += '<div class="sensor"></div>'
        ren += '<div class="speaker"></div>'
        ren += '<div class="screen">'
        ren += '<div class=" itemlabel">'
        ren += ''
        ren += '<div id="marvel-device iphone8plus black" class="inner">'



        for (let i = 0; i < this.chapters.length; i++) {
            ren += `<div class="container d-flex p-2 bd-highlight">`
            ren += `<div class="page container">`
            if (i === 0) {
                ren += `<h1 id='title'>`
                ren += `${this.title}`
                ren += `</h1>`
            }
            ren += `<h2 class="chapterTitle">${this.chapters[i].title}</h2>`
            for (let j = 0; j < this.chapters[i].paragraphs.length; j++) {
                ren += `<p class="chapterParagraph">${this.chapters[i].paragraphs[j]}</p>`
            }
            ren += `</div></div>`

        }
        ren += `</div>`
        ren += '</div>'
        ren += '</div>'
        ren += '</div>'
        ren += '<div class="home"></div>'
        ren += '<div class="bottom-bar"></div>'
        ren += '</div>'
        ren += `<div class="eBook">`
        console.log(ren)
        document.getElementById(this.hostElemId).innerHTML = ren
    }
}


const minBog = new eBook('main')
minBog.title = 'Mega sej titel'
// om der skal laves indrykninger ved start af nye afsnit
minBog.addChapter('Forord', [
    'Den gamle hytte lå på en frodig eng med smukke, vilde blomster, små bærbuske, æble -, pære - og blommetræer og krydderplanter af alle slags. Engen var rig på dyre- og fugleliv og summede af naturens aktiviteter.',
    'Nord for hytten lå en mindre skovsø spættet med åkander. Ud i søen strakte en lille faldefærdig bro sig.Tøjret til broen var en gammel robåd og på bredden stod en lille vandmølle, som langsomt æltede vandet. Ved siden af møllen stod en spand af træ bundet til et reb. Spanden blev brugt til at hælde vand op i andre spande af træ med store rustne hanke af metal. Fra skoven bugtede en lille bæk sig som en snedig slange. Ind og ud mellem træerne til den nåede den lille sø, hvor den pustede det ferske vand ud med et suk. Engen hed Carling.Ifølge sagnet var dette stedet “hvor gamle koner og hekse mødes”.Skoven hed Brewenville Skoven og var en af Englands største og ældste.Der var stadig store områder, som sjældent blev betrådt af menneskeben. Her i Carling, den idylliske oase i skoven, starter vores historie.',
])
minBog.addChapter('Første kapitel', [
    'Den gamle hytte lå på en frodig eng med smukke, vilde blomster, små bærbuske, æble -, pære - og blommetræer og krydderplanter af alle slags. Engen var rig på dyre- og fugleliv og summede af naturens aktiviteter.',
    'Nord for hytten lå en mindre skovsø spættet med åkander. Ud i søen strakte en lille faldefærdig bro sig.Tøjret til broen var en gammel robåd og på bredden stod en lille vandmølle, som langsomt æltede vandet. Ved siden af møllen stod en spand af træ bundet til et reb. Spanden blev brugt til at hælde vand op i andre spande af træ med store rustne hanke af metal. Fra skoven bugtede en lille bæk sig som en snedig slange. Ind og ud mellem træerne til den nåede den lille sø, hvor den pustede det ferske vand ud med et suk. Engen hed Carling.Ifølge sagnet var dette stedet “hvor gamle koner og hekse mødes”.Skoven hed Brewenville Skoven og var en af Englands største og ældste.Der var stadig store områder, som sjældent blev betrådt af menneskeben. Her i Carling, den idylliske oase i skoven, starter vores historie.',
])
minBog.addChapter('Andet kapitel', [
    'Fra hytten kunne man høre nogen nynne en skæv melodi. Indimellem kom der høje grynt og et råb.Herefter vendte stemmen tilbage til en hæs trallen.',
    'Det gamle vindue stod åbent.Indenfor skramledes og ramledes med kopper og tallerkener.Det var ikke hver dag, der blev gjort hovedrent i den forfaldne hytte.Det var heller ikke hver dag, der kom gæster.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Fra hytten kunne man høre nogen nynne en skæv melodi. Indimellem kom der høje grynt og et råb.Herefter vendte stemmen tilbage til en hæs trallen.',
    'Det gamle vindue stod åbent.Indenfor skramledes og ramledes med kopper og tallerkener.Det var ikke hver dag, der blev gjort hovedrent i den forfaldne hytte.Det var heller ikke hver dag, der kom gæster.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Fra hytten kunne man høre nogen nynne en skæv melodi. Indimellem kom der høje grynt og et råb.Herefter vendte stemmen tilbage til en hæs trallen.',
    'Det gamle vindue stod åbent.Indenfor skramledes og ramledes med kopper og tallerkener.Det var ikke hver dag, der blev gjort hovedrent i den forfaldne hytte.Det var heller ikke hver dag, der kom gæster.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Den rødbrune, alt for store skovmandsskjorte, hang til midten af lårene.Om livet sad et rynket læderbælte.Her hang en stor dolk i en gammel skede.',
    'Konens sorte øjne kneb sig sammen, mens hun spejdede mod vest.Det så ud som om hun ventede på, at et eller andet pludselig skulle dumpe ud af skoven.Hun gryntede og rystede lidt på hovedet.',
    'Hun anede nemlig ikke, hvem det var, der kom på sjældent besøg i dag.Og hun vidste heller ikke hvornår.Hun havde ikke set nogen mennesker i årtier og hun havde heller ikke savnet deres selskab.'
])
minBog.addChapter('Tredje kapitel', [
    'Fra hytten kunne man høre nogen nynne en skæv melodi. Indimellem kom der høje grynt og et råb.Herefter vendte stemmen tilbage til en hæs trallen.',
    'Det gamle vindue stod åbent.Indenfor skramledes og ramledes med kopper og tallerkener.Det var ikke hver dag, der blev gjort hovedrent i den forfaldne hytte.Det var heller ikke hver dag, der kom gæster.',
    'Den gamle kone stod lidt og skulede ud af vinduet med hænderne i siden på de benede hofter.Hun havde kakigrønne bukser på som stoppede lige under de knoglede knæ.Hendes brune ben var fulde af myggestik, mærker fra uheld og ridser fra grene, buske og torne.',
    'Den rødbrune, alt for store skovmandsskjorte, hang til midten af lårene.Om livet sad et rynket læderbælte.Her hang en stor dolk i en gammel skede.',
    'Konens sorte øjne kneb sig sammen, mens hun spejdede mod vest.Det så ud som om hun ventede på, at et eller andet pludselig skulle dumpe ud af skoven.Hun gryntede og rystede lidt på hovedet.',
    'Hun anede nemlig ikke, hvem det var, der kom på sjældent besøg i dag.Og hun vidste heller ikke hvornår.Hun havde ikke set nogen mennesker i årtier og hun havde heller ikke savnet deres selskab.'
])

minBog.render()
