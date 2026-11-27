const singleProducts = {
    carbonara: {
        title: "Carbonara - o clássico de Roma.",
        price: 78,
        image: "../Images/arquivo.figma/image 14.png",
        imageAlt: "Prato de spaghetti à carbonara",
        details: "Spaghetti com molho de gemas de ovo, pecorino romano ralado, pimenta-do-reino e guanciale.",
        description: [
            "Spaghetti al dente envolvido em um molho cremoso de gemas e pecorino romano, preparado na hora e sem creme de leite. Finalizado com guanciale crocante dourado na própria gordura e pimenta-do-reino moída na hora.",
            "Uma receita romana autêntica, que depende de poucos ingredientes e de muita técnica. O calor da massa e um toque da água do cozimento transformam gema e queijo em um molho aveludado, intenso e inconfundível."
        ],
    },
    "bruschetta": {
        title: "Bruschetta al Pomodoro – O sabor simples da Itália",
        price: 38,
        reference: "section-single-20.png",
        photo: [58,235,720,721],
        details: "Pão italiano, tomate maduro, alho, manjericão fresco, azeite extravirgem e sal marinho.",
        description: [
            "Fatias de pão italiano tostadas na chapa e esfregadas com alho, cobertas com tomates frescos e maduros, temperados na hora com manjericão, sal marinho e azeite extravirgem.",
            "Uma receita italiana simples, que depende de poucos ingredientes e de muito frescor. O calor do pão e o suco do tomate maduro se misturam ao azeite e ao alho num sabor leve, perfumado e inconfundível."
        ],
    },
    "carpaccio": {
        title: "Carpaccio di Manzo – Leve, fino e elegante",
        price: 70,
        reference: "section-single-21.png",
        photo: [37,285,720,721],
        details: "Filé mignon, rúcula, parmesão, alcaparras, limão siciliano, azeite extravirgem e pimenta-do-reino.",
        description: [
            "Lâminas finíssimas de filé mignon cru, servidas sobre uma cama de rúcula fresca, com lascas de parmesão e alcaparras. Temperado na hora com molho de limão siciliano, azeite extravirgem e pimenta-do-reino moída.",
            "Uma criação de Veneza que depende da qualidade da carne e da delicadeza do corte. A acidez do limão realça a maciez do filé, a rúcula traz o toque amargo e o parmesão fecha com sabor intenso. Um prato fresco, leve e elegante."
        ],
    },
    "arancini": {
        title: "Arancini di Riso – A crocância da Sicília",
        price: 38,
        reference: "section-single.png",
        photo: [58,263,720,720],
        details: "Arroz arbóreo, muçarela, parmesão, ovo, farinha de rosca e molho de tomate.",
        description: [
            "Bolinhos dourados de risoto cremoso, empanados e fritos na hora, com coração de muçarela derretida. Servidos sobre molho de tomate rústico com manjericão e finalizados com ervas frescas.",
            "Típico da Sicília, o arancino ganhou o nome de \"laranjinha\" pelo formato e pela cor dourada. A casca crocante esconde um recheio macio e cremoso, e o queijo que estica a cada mordida combina com o molho de tomate, doce e intenso."
        ],
    },
    "lasagna": {
        title: "Lasagna alla Bolognese – Camadas de tradição",
        price: 70,
        reference: "section-single-5.png",
        photo: [37,260,720,720],
        details: "Massa fresca, carne bovina, tomate, cebola, cenoura, aipo, bechamel e parmesão.",
        description: [
            "Camadas de massa fresca artesanal intercaladas com ragù de carne cozido lentamente, bechamel aveludado e parmesão. Gratinada no forno até formar uma crosta dourada e borbulhante.",
            "Nascida na Emília-Romanha, a lasagna alla Bolognese pede paciência: o ragù cozinha por horas para ganhar profundidade. O resultado é uma fatia cremosa, intensa e reconfortante, com o sabor da cozinha de casa."
        ],
    },
    "risotto-funghi": {
        title: "Risotto ai Funghi – Cremoso, terroso, reconfortante",
        price: 68,
        reference: "section-single-1.png",
        photo: [37,260,720,720],
        details: "Arroz arbóreo, cogumelos frescos, caldo, vinho branco, cebola, manteiga e parmesão.",
        description: [
            "Arroz arbóreo cozido aos poucos com caldo caseiro e vinho branco seco, com um mix de cogumelos frescos salteados no alho. Finalizado com manteiga, parmesão e salsinha. É mexido devagar até o amido do arroz formar o próprio creme. O aroma terroso dos cogumelos deixa o prato aconchegante, de textura cremosa e sabor profundo."
        ],
    },
    "ossobuco": {
        title: "Ossobuco alla Milanese – O prato nobre de Milão",
        price: 85,
        reference: "section-single-2.png",
        photo: [58,273,720,720],
        details: "Jarrete bovino com osso, cenoura, aipo, cebola, tomate, vinho branco e gremolata.",
        description: [
            "Jarrete bovino com osso cozido lentamente com legumes, tomate e vinho branco, finalizado com gremolata.",
            "Clássico da cozinha milanesa, o ossobuco tem no tutano do osso o seu tesouro. A cocção longa deixa a carne macia, e a gremolata final traz o frescor que equilibra a riqueza do molho."
        ],
    },
    "insalata-caprese": {
        title: "Insalata Caprese – As cores da Itália no prato",
        price: 45,
        reference: "section-single-11.png",
        photo: [58,282,720,720],
        details: "Tomate maduro, muçarela de búfala, manjericão, azeite extravirgem, flor de sal e balsâmico.",
        description: [
            "Fatias suculentas de tomate maduro com muçarela de búfala cremosa e folhas de manjericão fresco, finalizadas com azeite extravirgem, flor de sal e redução de vinagre balsâmico.",
            "Originária da ilha de Capri, reúne o verde, o branco e o vermelho da bandeira italiana. Não tem truque: o segredo é a qualidade de cada ingrediente."
        ],
    },
    "fettuccine": {
        title: "Fettuccine Alfredo – Cremoso como deve ser",
        price: 70,
        reference: "section-single-3.png",
        photo: [60,273,720,720],
        details: "Fettuccine fresco, manteiga, creme de leite fresco, parmesão, pimenta-do-reino e salsinha.",
        description: [
            "Fettuccine fresco envolvido em um molho branco aveludado de manteiga, creme de leite fresco e parmesão ralado na hora. Finalizado com pimenta-do-reino moída e salsinha picada.",
            "Um clássico da cozinha romana, o Alfredo vive da simplicidade: poucos ingredientes e muita cremosidade. O molho abraça cada fio da massa, deixando o prato macio, reconfortante e cheio de sabor."
        ],
    },
    "spaghetti-vongole": {
        title: "Spaghetti alle Vongole – O mar em cada garfada",
        price: 88,
        reference: "section-single-6.png",
        photo: [37,254,720,720],
        details: "Spaghetti, frutos do mar, azeite, alho, vinho branco, tomate, salsinha e pimenta.",
        description: [
            "Spaghetti al dente salteado com frutos do mar no azeite, alho e vinho branco, com tomate fresco e salsinha. Finalizado com um toque de pimenta.",
            "Um prato típico do litoral italiano, em que o caldo dos frutos do mar se mistura ao azeite e cobre a massa. É leve, aromático e tem o sabor salgado e fresco do mar."
        ],
    },
    "tiramisu": {
        title: "Tiramisù – A sobremesa que a Itália ama",
        price: 30,
        reference: "section-single-7.png",
        photo: [37,254,720,720],
        details: "Biscoito champanhe, café espresso, mascarpone, gemas, açúcar e cacau em pó.",
        description: [
            "Camadas de biscoito champanhe embebidos em café espresso, intercaladas com um creme aveludado de mascarpone. Finalizado com cacau em pó peneirado na hora.",
            "O nome significa \"me levanta\", pela energia do café e pela doçura do creme. É leve, cremoso e equilibrado, a despedida perfeita pra uma refeição italiana"
        ],
    },
    "parmigiana": {
        title: "Parmigiana di Melanzane – O verdadeiro abraço da Itália",
        price: 70,
        reference: "section-single-8.png",
        photo: [37,254,720,720],
        details: "Berinjela, molho de tomate, muçarela, parmesão e manjericão.",
        description: [
            "Camadas de berinjela dourada intercaladas com molho de tomate caseiro, muçarela derretida e folhas de manjericão fresco. Finalizada com parmesão e gratinada no forno.",
            "Prato típico do Sul da Itália, com a origem disputada entre Sicília e Campânia. É suculento, aromático e reconfortante, daqueles que lembram comida de família."
        ],
    },
    "gnocchi-sugo": {
        title: "Gnocchi di Patate al Sugo – Macios como as nuvens",
        price: 60,
        reference: "section-single-4.png",
        photo: [60,211,720,720],
        details: "Batata, farinha de trigo, tomate, manjericão, azeite e parmesão.",
        description: [
            "Nhoques artesanais de batata, macios e leves, envolvidos em um molho de tomate fresco cozido lentamente com manjericão e um fio de azeite. Finalizados com parmesão ralado na hora.",
            "Feito de poucos ingredientes, o nhoque depende do ponto certo da massa. Com o sugo de tomate, vira um prato simples, caseiro e cheio de sabor."
        ],
    },
    "risotto-frutti-di-mare": {
        title: "Risotto ai Frutti di Mare – Os tesouros do mar no prato",
        price: 95,
        reference: "section-single-9.png",
        photo: [37,254,720,720],
        details: "Arroz arbóreo, camarão, lula, mexilhões, vôngoles, caldo de peixe, vinho branco e limão siciliano.",
        description: [
            "Arroz arbóreo cozido lentamente em caldo de peixe e vinho branco, com camarões, lulas, mexilhões e vôngoles frescos. Finalizado com salsinha, raspas de limão siciliano e um fio de azeite extravirgem.",
            "\"Frutti di mare\" quer dizer frutos do mar, e o caldo de peixe leva esse sabor pra dentro de cada grão. É um risoto aromático, cremoso e marcante."
        ],
    },
    "gnocchi-pesto": {
        title: "Nhoque ao Pesto – O verde vibrante da Itália",
        price: 78,
        reference: "section-single-10.png",
        photo: [37,254,720,720],
        details: "Batata, farinha de trigo, ovo, manjericão, pinoli, alho, parmesão e azeite.",
        description: [
            "Nhoques artesanais de batata envolvidos em um pesto genovês feito na hora com manjericão fresco, pinoli, alho, parmesão e azeite extravirgem. Finalizados com lascas de parmesão.",
            "O pesto nasceu na Ligúria, e o segredo está no manjericão fresco e no azeite de qualidade. Verde, aromático e cremoso, combina com a maciez do nhoque."
        ],
    },
    "chianti": {
        title: "Chianti Classico Riserva – 2020",
        price: 320,
        reference: "section_Wines-single.png",
        photo: [108,232,720,720],
        details: {
            "Produtor": "Tenuta Santa Lucia",
            "País / Região": "Itália (Toscana)",
            "Safra": "2020",
            "Estilo": "Tinto/Seco",
            "Uva": "Sangiovese",
            "Graduação alcoólica": "13,5%"
        },
        description: [
            "100% Sangiovese de vinhedos de colinas na Toscana, Itália. Colheita manual, fermentação em tanques de aço inox a 28 °C com remontagens diárias. Estagia 18 meses em barricas de carvalho francês, seguidos de 6 meses em garrafa. Cor rubi profundo com reflexos granada. Aroma de cereja madura, violeta e especiarias suaves. Na boca é seco, com acidez vibrante, taninos firmes e final longo e elegante."
        ],
    },
    "barolo": {
        title: "Barolo – 2018",
        price: 450,
        reference: "section-single-12.png",
        photo: [58,232,720,679],
        details: {
            "Produtor": "Casa Montebruno",
            "País / Região": "Itália (Piemonte)",
            "Safra": "2018",
            "Estilo": "Tinto/Seco",
            "Uva": "Nebbiolo",
            "Graduação alcoólica": "14,5%"
        },
        description: [
            "100% Nebbiolo das colinas de Barolo. Colheita manual, maceração prolongada de 25 dias com a casca e fermentação com leveduras nativas. Estagia 24 meses em grandes tonéis de carvalho de Slavonia, mais 12 meses em garrafa."
        ],
    },
    "montepulciano": {
        title: "Montepulciano d’Abruzzo – 2021",
        price: 190,
        reference: "section-single-13.png",
        photo: [79,232,720,720],
        details: {
            "Produtor": "Podere Rio Verde",
            "País / Região": "Itália, Abruzzo",
            "Safra": "2021",
            "Estilo": "Tinto/Seco",
            "Uva": "Montepulciano",
            "Graduação alcoólica": "13%"
        },
        description: [
            "100% Montepulciano dos vinhedos do Abruzzo, na costa do Adriático. Fermentação em aço inox com maceração de 12 dias e 6 meses de estágio em cubas de cimento. Cor vermelho-rubi intenso com tons violáceos. Aroma de ameixa, amora e um toque de pimenta preta. Na boca é macio, frutado e de taninos redondos, ótimo com massas ao molho de tomate."
        ],
    },
    "primitivo": {
        title: "Primitivo di Manduria – 2021",
        price: 190,
        reference: "section_Wines-single - Primitivo di Manduria - 2021.png",
        photo: [69,205,720,720],
        details: {
            "Produtor": "Fattoria La Quercia",
            "País / Região": "Itália, Puglia",
            "Safra": "2021",
            "Estilo": "Tinto/Seco",
            "Uva": "Primitivo",
            "Graduação alcoólica": "14,5%"
        },
        description: [
            "100% Primitivo de vinhedos ensolarados da Puglia. Colheita manual em uvas bem maduras e fermentação a 26 °C em aço inox. Estagia 8 meses em barricas de carvalho americano.",
            "Cor rubi-violáceo muito intensa. Aroma de geleia de frutas negras, figo seco e baunilha. Na boca é encorpado e envolvente, com taninos macios e final longo, levemente adocicado de fruta."
        ],
        quantity: false,
    },
    "valpolicella": {
        title: "Valpolicella Ripasso – 2020",
        price: 250,
        reference: "section-single-14.png",
        photo: [69,232,720,720],
        details: {
            "Produtor": "Cantina del Sole",
            "País / Região": "Itália, Vêneto",
            "Safra": "2020",
            "Estilo": "Tinto/Seco",
            "Uva": "Corvina, Corvinone e Rondinella",
            "Graduação alcoólica": "14%"
        },
        description: [
            "Blend de Corvina, Corvinone e Rondinella. Após a fermentação, o vinho passa sobre as cascas do Amarone pela técnica ripasso, ganhando corpo e complexidade."
        ],
    },
    "barbera": {
        title: "Barbera d’Alba – 2021",
        price: 190,
        reference: "section-single-15.png",
        photo: [108,232,720,720],
        details: {
            "Produtor": "Tenuta Bellavista",
            "País / Região": "Itália, Piemonte",
            "Safra": "2021",
            "Estilo": "Tinto/Seco",
            "Uva": "Barbera",
            "Graduação alcoólica": "14%"
        },
        description: [
            "100% Barbera de vinhedos de Alba. Fermentação em aço inox com leveduras selecionadas e 10 meses de estágio em barricas de carvalho francês usadas. Cor vermelho-rubi vivo. Aroma de cereja azeda, framboesa e um toque de violeta. Na boca tem acidez marcante, taninos suaves e final fresco, perfeito pra equilibrar pratos mais gordurosos."
        ],
    },
    "nero-d-avola": {
        title: "Nero d’Avola – 2022",
        price: 200,
        reference: "section-single-16.png",
        photo: [108,232,720,720],
        details: {
            "Produtor": "Casa Pietrabianca",
            "País / Região": "Itália, Sicília",
            "Safra": "2022",
            "Estilo": "Tinto/Seco",
            "Uva": "Nero d'Avola",
            "Graduação alcoólica": "13,5%"
        },
        description: [
            "Tinto seco da Sicília, elaborado com uvas Nero d’Avola."
        ],
    },
    "pinot-grigio": {
        title: "Pinot Grigio delle Venezie – 2023",
        price: 150,
        reference: "section-single-17.png",
        photo: [69,232,720,720],
        details: {
            "Produtor": "Podere Alba Chiara",
            "País / Região": "Itália, Vêneto",
            "Safra": "2023",
            "Estilo": "Branco/Seco",
            "Uva": "Pinot Grigio",
            "Graduação alcoólica": "12,5%"
        },
        description: [
            "100% Pinot Grigio do nordeste da Itália. Colheita manual em horas frescas, prensagem suave e fermentação a 16 °C em aço inox, pra preservar o frescor. Cor amarelo-palha com reflexos esverdeados. Aroma de pera, maçã verde e flores brancas. Na boca é leve, seco e crocante, com final limpo e refrescante."
        ],
    },
    "gavi": {
        title: "Gavi di Gavi – 2023",
        price: 200,
        reference: "section-single-18.png",
        photo: [73,232,720,720],
        details: {
            "Produtor": "Tenuta Rocca Vecchia",
            "País / Região": "Itália, Piemonte",
            "Safra": "2023",
            "Estilo": "Branco/Seco",
            "Uva": "Cortese",
            "Graduação alcoólica": "12,5%"
        },
        description: [
            "100% Cortese de vinhedos de Gavi. Prensagem suave e fermentação em aço inox a 15 °C, sem passagem por madeira. Cor amarelo-palha claro. Aroma de maçã verde, flor de tília e amêndoa fresca.",
            "Na boca é seco, elegante e mineral, com acidez equilibrada e final persistente."
        ],
        quantity: false,
    },
    "soave": {
        title: "Soave Classico – 2022",
        price: 190,
        reference: "section-single-19.png",
        photo: [73,235,720,720],
        details: {
            "Produtor": "Fattoria San Marino",
            "País / Região": "Itália, Vêneto",
            "Safra": "2022",
            "Estilo": "Branco/Seco",
            "Uva": "Garganega",
            "Graduação alcoólica": "12,5%"
        },
        description: [
            "100% Garganega de vinhedos vulcânicos da zona clássica de Soave. Colheita manual e fermentação em aço inox, com 5 meses sobre as borras. Cor amarelo-dourado claro. Aroma de pêssego branco, amêndoa e flores do campo. Na boca é macio, com leve cremosidade e final de amêndoas, ótimo com risotos e massas cremosas."
        ],
        quantity: false,
    },
    "rosato": {
        title: "Rosato di Toscana – 2023",
        price: 170,
        reference: "section_Wines-single - Rosato di Toscana - 2023.png",
        photo: [108,196,720,720],
        details: {
            "Produtor": "Cantina Le Rondini",
            "País / Região": "Itália, Toscana",
            "Safra": "2023",
            "Estilo": "Rosé/Seco",
            "Uva": "Sangiovese",
            "Graduação alcoólica": "12,5%"
        },
        description: [
            "100% Sangiovese vinificado como rosé. Maceração curta de 6 horas com as cascas, pra extrair apenas a cor delicada, e fermentação a 14 °C em aço inox.",
            "Cor rosa-salmão. Aroma de morango, framboesa e pétalas de rosa. Na boca é fresco, leve e seco, com final frutado e agradável."
        ],
        quantity: false,
    },
    "prosecco": {
        title: "Prosecco DOC Brut",
        price: 180,
        reference: "section_Wines-single - Prosecco DOC Brut.png",
        photo: [108,196,720,720],
        details: {
            "Produtor": "Casa Vignaverde",
            "País / Região": "Itália, Vêneto",
            "Safra": "Não safrado (NV)",
            "Estilo": "Espumante/Brut",
            "Uva": "Glera",
            "Graduação alcoólica": "11%"
        },
        description: [
            "100% Glera do Vêneto. Segunda fermentação em tanques de aço inox (método Charmat), por cerca de 30 dias.",
            "Cor amarelo-palha brilhante com perlage fina e persistente. Aroma de maçã verde, pera e flores brancas. Na boca é fresco, leve e vivo, ótimo pra abrir a refeição com as entradas."
        ],
        quantity: false,
    },
    "franciacorta": {
        title: "Franciacorta Brut",
        price: 400,
        reference: "section_Wines-single - Franciacorta Brut.png",
        photo: [108,196,720,720],
        details: {
            "Produtor": "Tenuta Monteverde",
            "País / Região": "Itália, Lombardia",
            "Safra": "Não safrado (NV)",
            "Estilo": "Espumante/Brut",
            "Uva": "Chardonnay e Pinot Nero",
            "Graduação alcoólica": "12,5%"
        },
        description: [
            "Blend de Chardonnay e Pinot Nero da Lombardia. Segunda fermentação na garrafa (método tradicional), com 24 meses sobre as leveduras.",
            "Cor amarelo-dourado com perlage fina e elegante. Aroma de brioche, maçã assada e amêndoas. Na boca é cremoso e complexo, com acidez refrescante e final longo."
        ],
        quantity: false,
    },
    "moscato": {
        title: "Moscato d’Asti – 2023",
        price: 180,
        reference: "section_Wines-single - Moscato d’Asti - 2023.png",
        photo: [108,196,720,720],
        details: {
            "Produtor": "Podere Fiordaliso",
            "País / Região": "Itália, Piemonte",
            "Safra": "2023",
            "Estilo": "Branco/Doce (frisante)",
            "Uva": "Moscato Bianco",
            "Graduação alcoólica": "5,5%"
        },
        description: [
            "100% Moscato Bianco das colinas de Asti. A fermentação é interrompida naturalmente pra preservar o açúcar da uva, resultando em um vinho levemente gaseificado e de baixo teor alcoólico.",
            "Cor amarelo-claro com bolhas delicadas. Aroma de pêssego, flor de laranjeira e uva fresca. Na boca é doce, leve e refrescante, perfeito pra acompanhar o tiramisù."
        ],
        quantity: false,
    },
    "vermentino": {
        title: "Vermentino di Sardegna – 2023",
        price: 0,
        reference: "section_Wines-single - Vermentino di Sardegna 2023.png",
        photo: [108,196,720,720],
        details: {
            "Produtor": "Cantina Monteoro",
            "País / Região": "Itália, Sardenha",
            "Safra": "2023",
            "Estilo": "Branco/Seco",
            "Uva": "Vermentino",
            "Graduação alcoólica": "13%"
        },
        description: [
            "100% Vermentino de vinhedos próximos ao mar na Sardenha. Fermentação controlada a 15 °C em aço inox e 4 meses sobre as borras finas, pra dar mais textura.",
            "Cor amarelo-citrino brilhante. Aroma de limão siciliano, ervas frescas e um toque salino. Na boca é vivo, mineral e de final cítrico, combinando muito bem com frutos do mar."
        ],
    },
};
