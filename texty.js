const parnasCon = document.querySelector("#parnas");
const indieCon = document.querySelector("#indie");
const zaznamyCon = document.querySelector("#zaznamy");
const viktorCon = document.querySelector("#viktor");

const pageId = document.body.id;

export const texts = [
  {
    heading: 'Ranním Berlínem jede vlak',
    text: 'Mléčná ňadra<br>s růžovým nedotknutelným popředím<br>prosvítají ze sna<br>Dráty přetínají<br>dráhy rozbíhavé<br>Gracilní konstrukce<br>jeřábů rozkročmo stojících<br>sytí spletitou síť<br>rozkrojeného města<br>Rána nezcelená<br>snad nekrvácí<br>chirurg doufá<br>rád by věřil<br>v bezinfekčnost implikovaného těsta<br>ač-li se kulaté barely nadýmají<br>do štítů strmých střech<br>a ptáci ještě stále sípají bez dechu<br>Přesto nové náplasti z betonu<br>obemykají rumiště<br>rozspárovaných drah<br>rozparcelovaných hájů<br>Spréva jakoby netekla<br>jakoby nikam nevedla žádná cesta',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Čekání na dva vlaky',
    text: 'Káva voní<br>ranními mrakodrapy<br>světlo se odráží<br>od skleněných stěn<br>Vysoko kdesi<br>nahoře<br>nebe nevidět<br>Čtenáři novin<br>dobře potopeni<br>nevnímají<br>dokonce ani<br>že slunce už vyšlo<br>(jako ostatně vždycky proč by ne?)',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Další z vlaku',
    text: 'Dnes v tomhle vlaku<br>v tomhle kupé<br>na vývoz bjůty<br>jede<br>První královna krás<br> průhledná a běloskvoucí<br>studuje<br>„engl.seminar Buch“<br>O.W.<br>nejspíše toho dramatika<br>Její oči<br>když se podívají<br>jiskřivě a nevinně<br>člověka vnitřnosti<br>polechtají<br><br>V Mnichově <br>(tam musí žít krásy)<br>vystoupila<br>předtím ponechavši<br>vůni rozptýlenou<br>lehýnce prsty<br>na šíji rozetřenou<br><br>Hned na to<br> přistoupila královna<br> druhá<br>černoskvoucí<br>oči berlínské Neffertiti<br>obočí popravdě také<br>vlasy vyčesané za uši<br>z slonové kosti<br>jakby vyřezané<br>Vůňe<br> snad jiná té předešlé<br>nemohu ručit již za nic<br><br>Věřím teď skoro<br>že z přebalů časopisů<br>dívají se<br>dívky<br>vzdělané<br>a ne umělé',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Na lodi',
    text: 'Přízraky stínů<br>plují kolem lodi<br>vlaječka pleskotá<br>na záchranném sudu<br>horizont moře<br>vpíjí se<br>do mlhy nebe<br>a světlo se perlí<br>na špičkách <br>mihotavých vln<br><br>Jakoby vzpomínky<br>měly se přihodit<br>někdy příště<br>znovu',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Slunce z levé strany',
    text: '<em>(K.H.Borovskému)</em><br>Vlna třískne do vokýnka<br>další tuna mine<br>černá bílá<br>modrosivá<br>hojdá moře snivé<br><br>Tvrdý úder proti tobě<br>míří voda<br>leč ne mstivě<br>-<br>-<br>český chasník - zívne',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Na staré lodi se kolébáme',
    text: 'Rzivé dunění<br>přídě o vlny<br>rozléhá se<br>dutým břichem lodi <br>i po pláni <br>tmoucího se moře<br><br>Bachratice<br>stářím a únavou <br>vykloněná v bok <br>pomalu  rdousí motory <br>aby z nich vymáčkla <br>poslední výdechy <br>a doplula na ostrov<br>všech přání<br><br>Vítr utichá<br>světlo zablesklo<br>První rackové<br>rozstříkli břichem<br>hřebeny traktovaných vln<br><br>13. 11. 1994, cesta na Krétu.',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Issehoved Flak (ledová kra)',
    text: 'Stopy racka obrovského<br>v nízkém světle<br>v prudkém větru<br>sytých vůní<br>Vlny vody<br>repetice tepou <br>šumící a rozhučené<br>Ptáček pípne tiše <br>a přeci je slyšet<br>-<br>ostřivý kraj hory <br>se měkce rozplyne <br>v napité páře <br>a lepivém větru<br><br>Samsø, Dánsko.',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Plovoucí dům',
    text: 'Dům plove<br>zprava doleva <br>jak sedím u stolu <br>Nemůžu ani  věřit té záhadě <br>ostatním snad přirozené <br>Nechápu prostě dosud <br>že letadlo letí <br>a loď pluje<br>Horizont moře <br>kolébá se <br>jednou nahoře <br>podruhé dole<br>Záleží na tom <br>jak větr duje',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Hřbet hory',
    text: 'Hřbet koně?<br>Beránci ho přeskakují <br>na hřívu trávy <br>nic nedbají <br>Jsou to jen beránci z nebe<br>Rychle plují <br>do prázdných kosmických slují',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Z Itey  na Parnas',
    text: 'Obklopilo mne hejno ryb<br>když jsme pluli<br>údolím olivových hájů<br>nahoru<br>k Apolonově chrámu<br>V Dívčí jeskyni<br>hleděly ztrnulé sochy<br>temně',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Želvy',
    text: 'Hotel Happy day<br>hotel Delfín<br>Kalimera<br>dobrý den<br>Želví řeka<br><br>Ne „oni“ ale my<br>zapomněli<br>Na ně<br>Dehydrované<br>ztracené<br>mezi slunečníky<br>Šťastných dnů a<br>Delfínů',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Nocí a tmou',
    text: 'Loď pluje nocí<br>od břehu ostrova<br>k ránu<br>od večera<br><br>Jako podivná pevnost<br>sune se<br>pomalu<br>přídí vpřed<br>Boky zprohýbané<br>o nárazy mola<br>Plavba bez konce<br>míří k počátku<br><br>Dítě nevyspalé<br>vrtí se<br>v náruči<br>matky lodě<br><br>Noc stále trvá',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Dvojí stín v Rozsochách',
    text: 'Nad rybníkem<br>Slunce se blíží k horizontu,<br>z hladiny v odrazu jeho dvojník svítí.<br>Sochař - divák<br>poprvé v životě spatřil dva své stíny.<br>Jeden je pevný v obrysech<br>hustý v tonu,<br>druhý pak, nesmírný v délce,<br>vznáší se nad prvním<br>jak anděl Antipod.<br>Průhledný.<br>Zázračný.<br><br>Sochař,<br>ačkoliv již dumá léta<br>o stínech světa<br>na stěnách síně jeskynní,<br>překvapen byl<br>jevem tím,<br>poltíce se ve dvoustín.',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Hlava opřená do kamene',
    text: '<em>Pro Naďu Plíškovou</em><br>„Skutečnost fantasii hlavu stíná<br>obraz<br>který se nevrátí...“<br>To je tu<br>co z Kyklad zbývá?<br>Hořký bolný stud<br>vzpomínka někde v hloubi lebky skrytá<br>náhražka - báseň<br>žízní mou<br>zas rozum rozvrátí<br><br>V háji olivovém<br>kúros odpočívá<br>pod vůní fíků<br>rozlomen mezi kozami<br><br>„Moderní“ mramor<br>leží dnes kol kolem<br>válí se všudy ouhorem<br>Z vysoké hory vylámán<br>vysypán z korby srdce mentálního<br>Základem podloží<br>silnic a nervů<br>Řežou ho na pláty<br>na desky umyvadel<br>do penzionu „Sen“<br><br>Bujaře drandí Řekové<br>na motocyklech<br>Zadnice<br>dívek černookých<br>uhánějí<br>tam<br>jinam<br>a zase sem ',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Světlo nebe',
    text: 'Zakleto  do kamene',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Naxos (vesnice na ostrově)',
    text: 'Z hory ostrova<br>zírám do vesmíru<br>Koronida letí<br>mezi mraky<br>Mořem se pluje do oblohy<br>ráno tam<br>a večer taky<br>Kdo ještě pozná<br>že nelze jít<br>právě teď<br>a nikdy<br>zpátky',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Z hovorů ostrova Bornholmu',
    text: '<em>Sørenovi Gregersenovi</em><br>Tak jako slavíci v hejnech<br>snášejí se<br>po příletu jara<br>v jednom mžiku<br>k spánku<br>držíce se pravidel<br>všech zpěvavých<br>a krákoravých ptáků:<br>Neslétneš blíž<br>než je dovoleno<br>ke svému<br>soudruhu<br>rodnému<br>Letíš tam<br>kam většina<br>tvých souletících<br>Rychlostí<br>ne větší svého<br>torpédu podobnému<br>druha<br>a ne pomaleji!<br><br>Tak jedná souručenství lidí<br>ale jen<br>možná<br>někdy<br>kdo ví<br>asi<br>ve zlým čase<br><br><br>Zneužívá toho<br>ovšem<br>každý trouba<br>který to jinak<br>nedotáhne nikam<br>než být<br>nocí zbabělý<br>a zlostným vrahem<br><br><br>Kroužíme<br>my<br>Jde to s námi nahoru<br>však s kopce<br>zvládáme turbulence<br>prudké zákruty a propady<br>až do chvíle<br>ve znamení skopce<br>kdy nám dojde kerosin',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Pod vodou',
    text: 'Ryby se stíny<br>stíny bez těla<br>světla vrcholů<br>vlny prosela<br>Křišťál nekřišťál<br>měkce proplula<br>těla netěla<br>Chlad světlo<br>tma teplo<br>dělohy záhada<br>Proud tě unáší<br>kost kámen<br>šisuje do běla<br><br>Dívám se na <br>vertikálu horizontu<br>ostrůvek s cerkvenicou<br>přilepen na čáře<br>Kořeny <br>vrůstají do moře<br>přímočaře<br>Kámen vlní se<br>pod vodou měkce <br>a křivolace',
    imgs: [],
    subTopic: "parnas"
  }, {
    heading: 'Velebné vznášení',
    text: 'Horizont<br>pomalu nahoru<br>pomalu dolů<br>Křídlisko<br>hýbe krovkami<br><br>Beránci<br>na cestě do pravěku<br>letí dozadu<br>A pára mraků<br>kupí<br>přesličné povlaky<br><br>Za letu sbírám<br>do kapsy<br>obrazy<br>vesmírné fantasie',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Letíme',
    text: 'Jako noc  přede dnem<br>svoji tvář vmáčíme <br>do mlhy<br>hned po snídani<br>předčasné<br>zároveň zpozdilé<br>Občas se skloníme<br>do tmy vesmíru<br>který je netečný<br>ke svému trvání',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Předlouhé svítání',
    text: 'Svítání trvá<br>jumbo jet<br>ďábelský koráb<br>letí –<br>čelem do tmy<br>ocasem ze světla<br>Já sedím uprostřed<br>vidím až nyní <br>prorocké vidiny<br>vepsané do Zákona<br><br>Peroutka na ocase<br>noří se <br>již třetí hodinu<br>zpět<br>ze tmy <br>do světla',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Kosmické svítání',
    text: 'První světlo záhadně přelilo<br>zvlněný povrch krajiny<br>Mezi jiskřivými měňavkami<br>samot, vesnic a měst<br>začly se měkce <br>líhnout kopce',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Dívám se na vás shora',
    text: ' Pod beránky tkví se v šeře<br>světélkující předivo<br>zuzlených spojů<br>Pod mračnou hladinou<br>zčeřenou větrem a svítáním<br>nehybní tvorové<br>žijí svůj tajemný sen',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Svítání za letu',
    text: 'Prostorem se vznáším<br>na hraně noci a dne<br>nevím, jsem-li tu<br>anebo onde<br>Křídlo<br>černý pařát<br>občas výhružně se pohne<br>nahoru, dolův<br>Bezhlesně praví:<br>„Vím, že jsi TAM“ ',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Zalykání (Pushkar)',
    text: 'Rytmus<br>bubny<br>oči živé<br>bakšiš bakšiš<br>lejno kraví<br>Chrám <br>hotel<br>chrám<br>děti zdraví<br>haló haló<br>Uši brní<br>z dotýkání<br><br>Opice <br>prasata<br>na rohu ulice<br>Nevidím slepice<br><br>Tabla ta ta <br>ra ta ta ta <br>ta ta ta tá<br>Ravanhata      <br><br>Bez vidiny<br>bez příčiny<br>leží zde tu<br>u jezera<br>jak nahatá<br>v rámu<br>holá<br>Kinská Stasja<br>s hadem<br>-inkognita<br><br>Slunce už zapadá<br>Dohráli,<br>je konec písně<br>Brahmíni zavřeli<br>Sun set caffé<br>-turistů chrám<br><br>Přišla ke mně<br>koza ze snů<br>v šedém svetru<br>oblečená <br>ze švů ',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Cestou kolem stok a sraček',
    text: 'Zda-li by Kundera <br>Milan<br>nenapsal spíše<br>„nesnesitelná tíže“<br>byl- li by v Indii?<br>To se nedozvíme<br>hlasitě ani tiše',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Psi mají přednost',
    text: 'Supi se snášejí<br>dolů z výše<br><br>Šumící stíny<br>padají zkameněle<br>do prachu<br>pouštní krajiny<br><br>Žebra buvola<br>trhají nebe',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Horn please',
    text: 'A s sebou si berte<br>vatu do uší<br><br>Tenhle bus<br>má dokonce<br>sedačku s tlumičem<br>pro řidiče<br>Skřípe<br>až bolí ty uši<br>tělo trne<br>A do toho vrzání<br>řezavě všichni troubí<br><br>Jezdí se zásadně<br>na plný plyn<br>aby se vyzkoušely<br>nervy<br>toho z protisměru<br><br>Jinačí svět<br>Tady v tý Indii<br>pořád ještě mají<br>ta těžká kola<br>celá ze železa<br><br>A motlitbu<br>Pro každou zatáčku<br>která se nedá <br>vytočit jinak než: <br>v poslední chvíli<br><br>A zedníci maltu <br>zavadnout nenechají<br>Hned hladí a rovnají<br>spousta jim toho přitom<br>ze stropu spadne<br>Inu, ženy donesou<br>v nádobách na hlavě<br>maltu novou',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Bezvěký velbloud Radjasthanu',
    text: 'Nosí<br>nebloudí<br>Naslouchá a čeká<br>na pokyn hlasu<br>pouště Pána<br><br>Nevyhnutelně<br>pomalu<br>kráčí den co den<br>trpělivě a trpně<br>s břemenem<br>jako Slunce',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Podcenění',
    text: 'Kámen tu osu<br>přeci zlomil<br>Náklaďák<br>vyhřezl<br>na silnici<br>a další rozsypal smetí <br>z korby<br>o jednu míli dál',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Slétání ptákostrojů',
    text: 'Zní poslední Raga<br>pozdrav z Indie<br>mraky se nakupily<br>k měkkému přistání<br>Tlakuji<br>nosem do uší<br>abych zřel<br>co zpívá Laledram<br><br>Ze dna moře<br>-totiž zpod oblak<br>temně se blíží země<br>chuchvalce cárů<br>trhají křídlo od trupu<br>Posvítil na cestě dolů<br>Frankfurt<br>dálnicí přívětivě<br><br>Křídla rozevřená<br>zježené klapkyvSedíme na místě<br>Pták za ptákem dosedá<br>s rozžatými světly',
    imgs: [],
    subTopic: "indie"
  }, {
    heading: 'Uibhist a tuath - North Uist',
    text: 'Mlčí kameny <br>Mlčí hory<br>Vlny se čeří<br>Vody sládnou převýšením<br>Nevyřčená slova: gleny a lochy<br>Nevyslovitelná zkamenění <br>Voda černá, čirá<br>voda všude, na hoře, v dole<br><br>Nahoře v chuchvalcích<br>cáry se rozpadají<br><br>Nikde strom, nikde kůl<br>nikde místo k spočinutí<br>Vlhká a kamenná země<br>ostrovy zapomněn',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Stonehenge na Uibhist a tuath',
    text: 'Tisíce let<br>trčí kamenné kruhy<br>třista pradědů, možná víc<br>vzpomíná zapomněné.<br>Nikdo už neví…:!<br>…mají ovce své pradědy<br>také zapomněly?',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Burial',
    text: 'Na kopci sedí kamenná hora<br>Vlhkem napitá rašelina<br>nepropadne se do kamene<br>jen ty se ponoříš…<br>Vpomeň si, vzpomeň, jak jen lze<br>V hlubinu chodby posvátné hory vdechnivTřpyt paměti do tmy zableskne se',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Loch nam Medahh – Jezero psů',
    text: 'Čára jak břitva – světlo hladiny<br>mrak se rozestoupil<br>Andělé bolesti padají<br>Černání vody k nesnesení<br>Andělé mlčení protnutou tišinou<br>vnesli svůj stín<br>Vítej<br>turisto, na North Uist',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Eaval',
    text: 'Zamračená<br>rozčesává mrak za mrakem<br>Temná masa do bílé mlhoviny<br>zahřezla se znovu<br>Bez konce, bez začátku<br>Sekera<br>vodou a kamenem ostřená<br>Hora Eaval',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Hebridy',
    text: 'Kamenná sekera<br>mlhy a lochy<br>chrchlance krvevchomáčky vlny<br>Člověk a rašelina<br>langusta v kleci vlečená',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Potoky – vodopády',
    text: 'Tkanice závratě<br>Padají z vrcholů dolů a dolů<br>za světla do šera<br>Tekou jak zářící, bílé a klikaté<br>křehounké vlásečnice<br>Stříbrné pavučinky<br>Skálu a kameny rozdírají<br>Hory rozemelou',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Apokalypticky v Invengery Hills',
    text: 'Temně, nehnutě a němě<br>nedýchají<br>Obřivbez tváře<br>Obludy strachumilné<br><br>Boj se, moderní rouhači<br>bytostí zkamenělých<br>vychrlenců zemského vnitřku!<br>Před ohněm rozdmýchaným<br>v autě neujedeš',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Obrázek vodovkama',
    text: 'Temně se plíží mrak<br>za zády horizontu<br>na břicho planiny<br>(jak jinak) <br>lehlo si jezero<br><br>Konečně - bytosti stromy<br><br>Strom stojí tu sám<br>pod cáry zpitého akvarelu',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Cesta autobusem',
    text: '<em>Homage à Josef Šíma</em><br>Po skle kapice deště<br>jak buňky spermatu ubíhají<br>dva yardy za oknem sprintuje krajina<br>pět metrů ode mne jen zvolna poklusává<br>a ještě dál<br>(to už není abstraktní<br>letící krajina<br>Josefa Šímy)<br>teče jezero<br>vodu hltavě<br>leč nehnutě <br>nacucává<br>Jako by nemělo dost<br>na tisíc rozpitých akvarelů',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Inverzní',
    text: 'Noc otevřela dveře dni<br>aby se skryl<br>před tváří ztemnělé krajiny<br>Země se  stočila<br>čelem k Měsíci<br><br>Temeno zatím si nahřeje<br>svá skrytá špinavá<br>přání<br><br>Za noci daří se nejlépe<br>leč nevzletně<br>hříchu spáchanému',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'O mylném milování',
    text: '/Led Zepelin/<br>Baby, baby, Iwon`t leave you<br>a přece tě opouštím<br>při každém zašilhánívznova a znova<br><br>kytara dobrnkávávvnebyl jsem nikdy schopen <br>vyslovit ta brutální slova<br>o láscevo krásném milování<br>do smrti smrtící<br>do srdce horoucího<br>strefovat se <br><br>Nicméně ….píšu je po papíru',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'V hospodě, jářku v Innu',
    text: 'Čas usínání<br>Dopíjím sklenici Murphyho<br>Voní po sýru<br>černá se po jezeru<br>Na vaše zdraví<br>Jářku, Skoti<br>vy ušlechtilí<br>inu , národovci',
    imgs: [],
    subTopic: "zaznamy"
  }, {
    heading: 'Zlatá je zlatá',
    text: 'A bůh náš nám dal:<br>brankář je Bůh<br>Naši chrabří fanoušci<br>(nebo jsou to jen skini?)<br>radostí z vítězství<br>jedenkrát: pobodali<br>jedenkrát: utloukli<br>jedenkrát: utopili<br><br>Zlatá je zlatá<br><br>Nálada v zemi <br>je a bude dobrá <br>Ne blbá <br>Alespoň několik dnů<br>konejší vůl vola<br><br>Les a sníh<br>černá prosvítá<br>z potoka<br>v poutech smích<br>provází čerta proroka<br>"Kdo si chce hrát na anděla, stává se zvířetem."  Pascal',
    imgs: [],
    subTopic: "viktor"
  }, {
    heading: 'Pro Naděždu a Osipa M.',
    text: 'Sedím<br>Celé dny<br>Piju čaj<br> a dumám<br>Bezcílně<br>smutně<br>("ohavně páchnou mrtvá slova")<br> a přesto věřím<br>ve smysl bytí<br><br>Ačkoliv nevím<br>zda ho nalézám<br>Někdy <br>je to na blití',
    imgs: [],
    subTopic: "viktor"
  }, {
    heading: 'Báseň psaná vlakem',
    text: 'Ztemnělá krajina<br>po poledni<br>zas kolem oken<br>prolétá<br>jakoby nemytá<br>sličná čímsi<br>pro čivy<br>Ztichlá  zimou<br>Úmorem<br>před jarem<br>sněhovým krystalem<br>zteplalým již do šedi<br>Prolitá ta krajina<br>pod nebem nehybným<br>letí a zpívá<br>hlasem bez hlasu<br>mučeným slovem<br>pamětí obrazů<br><br>Led se z řeky <br>skoro ztrácí',
    imgs: [],
    subTopic: "viktor"
  }, {
    heading: 'Danilu Charmsovi',
    text: 'Milostná noc<br>namísto na lůžku<br>u stolu sublimace<br><br>Básník řek:<br>Nevím co budem dnes jíst<br>A už vůbec ne co příště<br>Máme hlad<br><br>To bylo před šedesáti lety<br>v jiné zemi<br>která je velká<br>ale ne vzdálená<br>A jiný tam zheb<br>v lágru vyhnanec<br><br>My pijeme pivo<br> a stěžujem si na různý <br>nepříjemný věci<br>jako je "democracy"                                                                      ',
    imgs: [],
    subTopic: "viktor"
  }, {
    heading: 'Anděl krásný nezlověstný',
    text: '(podle obrazů Viktora Koláře)<br><br>Hrůzy fascinuje hrůza<br>Člověk kráčí oblaky<br>Stojící dům<br>již, již padne <br>na  paní <br><br>Cikán v bílém kolárku <br>s kapsami dozadu<br>hledí němě<br>do očí<br>splašeného koně<br>který stojí vycpaný<br>v koutě<br>(dvora snad)<br><br>Cíchy dosychají svůj den<br>ve světle strusky vylévané <br>z náspu dolů<br> pod stromy<br>Unavená těla <br>jakoby mrtvá<br>veze autobus<br>okoličnatkami<br>seschlou krajinou<br>dýmem krástěnou<br>Světlý kouř stoupá<br> z kelímků<br>úsměvy hledí do tváře<br>dvojice lidí<br<br>v podobné poloze<br><br>Slaměný klobouk muže<br> jako z Maorů<br>průvody tramvají<br>v nedokopaných ulicích <br><br>A bílá holubice letí<br>z Kanady<br>zatímco hoch vstřeluje<br>míč do branky pod dálnicí<br>Polibkem odplouváme z Toronta<br>někdo zvedá dítě<br>a někdo má velké bílé brýle<br>Smrt čeká v zrcadle<br>Renoirova dívkav rukou chlapce<br>stává se  obětí<br>kupní nabídky<br>a muž kráčí krajinou <br>s obrazem <br>v zrcadle šatníku<br>zatímco jiný<br>hledí do krásných nohou<br>poněkud v(nadné?) herečky<br>A v jiném obraze<br>tři chlapci <br>potkají na kolech<br>muže s kolečkama<br>pod dětským kočárkem<br>afinně <br>to samé <br>potkání <br>probíhá<br>na druhé straně ulice<br><br>Volavka dávno již<br>nekrvácí<br>Babička s holubem<br>sklání se nad hrobem<br> Pán krmí labuť<br>Zem krmí bagr<br>Jiný leží pod potrubím <br>tepláren<br>pohřbený a nezapomenutý<br><br>Balancovat na koni<br>nebo běžet po ohni<br>září hala sluncem<br>prosvítajícím člověkem<br>ve futrech<br>ohněm žhaveného plynu<br>Muž se<br>bezmocně bezděčně<br>sklání pod Kristem<br>a čteme choďte<br><br>tápiz<br>do toho zase dým<br>černý ponurý<br>Hořící karoserie<br>blyskotá (pramenitě?)<br>Nejsmutnější postavy<br>s vousky<br>hodinkami<br>i bez čepice<br><br>Truchlivý obraz čímsi<br>muž mladý stojí s aktovkou<br>jiný přichází neutrálně<br>leč s pohledem<br>mírně tak jako překvapeným  <br>U kaštanu voják<br>opřený jeho kmenem<br>další hledí na Tebe<br>nepospíchá k paní<br>jíž není skoro vidět<br><br>Postava zasažená<br>bezmocná<br>nevolá ani<br>kaluže krve<br>ztrnulé vody<br>hledí na ni<br>ostatní <br>živí zoufalí<br>ztrnuli fascinací - smrtí<br><br>A stará žena<br>přechází dopředu<br>ke světlu tunelem<br>jakoby nechtěla odejít<br>přivrací se zpět<br>ke světlu<br>za ní<br><br>"Život je dobrý"<br>tvrdí Ivana<br><br>Jak kdy',
    imgs: [],
    subTopic: "viktor"
  }
];

window.renderTexts = () => {
  parnasCon.innerHTML = '';
  indieCon.innerHTML = '';
  zaznamyCon.innerHTML = '';
  viktorCon.innerHTML = '';

  
  texts.forEach((text, index) => {
    const html = `
      <div class="text-artwork">
        <h3 class="text-heading">${text.heading}</h3>
        <p class="text">${text.text}</p>
        <div class="text-imgs">
        ${text.imgs.map((img) => {return `<img src="${img}" class="text-img"/>`})}
        </div>
      </div>
      `
    switch (text.subTopic) {
      case "parnas":
        parnasCon.innerHTML += html;
        break;
      case "indie":
        indieCon.innerHTML += html;
        break;
      case "zaznamy":
        zaznamyCon.innerHTML += html;
        break;
      case "viktor":
        viktorCon.innerHTML += html;
    }
  });
}

renderTexts();
