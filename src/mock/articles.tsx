const articles = {
  "data": [
    {
      "id": "1",
      "editionId": "6581abb6212da88cc694db24",
      "title": {
        "Ru": "Частотные характеристики полосковых модулей формирования квазихаотических сигнало на основе объемных нелинейно-оптических кристаллов",
        "Eng": "article2"
      },
      "authors": [
        "A. A. Arutyunyan",
        "N. D. Malyutin",
        "G. A. Malyutin",
        "S. N. Podzyvalov",
        "N. N. Yudin"
      ],
      "content": {
        "Ru": "В работе проведено экспериментальное исследование частотных зависимостей коэффициентов матрицы рассеяния полосковых модулей",
        "Eng": "test article content"
      },
      "keywords": [
        {
          "Ru": "нелинейно-оптические кристаллы",
          "Eng": "word1"
        },
        {
          "Ru": "СВЧ",
          "Eng": "word2"
        },
        {
          "Ru": "частотные характеристики",
          "Eng": "word3"
        }
      ],
      "filePathId": "656ce8bb55609fec5299784b",
      "literature": [
        "Veselago V. G. Electrodynamics of materials with negative index of refraction. Physics–Uspekhi. 2003;46(7):764–768. DOI: 10.1070/ PU2003v046n07ABEH001614",
        "Fisanov V. V. On the sign of the refractive index formetamaterials. Russian Physics Journal. 2021;64(8):1560–1565."
      ]
    },
    {
      "id": "2",
      "editionId": "1",
      "title": {
        "Ru": "Неотражающий полосковый полосно-пропускающий фильтр нечетных гармоник",
        "Eng": "article2"
      },
      "authors": [
        "A. A. Arutyunyan",
        "N. D. Malyutin",
        "G. A. Malyutin",
        "S. N. Podzyvalov",
        "N. N. Yudin"
      ],
      "content": {
        "Ru": "В работе проведено экспериментальное исследование частотных зависимостей коэффициентов матрицы рассеяния полосковых модулей",
        "Eng": "test article content"
      },
      "keywords": [
        {
          "Ru": "нелинейно-оптические кристаллы",
          "Eng": "word1"
        },
        {
          "Ru": "СВЧ",
          "Eng": "word2"
        },
        {
          "Ru": "частотные характеристики",
          "Eng": "word3"
        }
      ],
      "filePathId": "656ce8bb55609fec5299784b",
      "literature": [
        "Veselago V. G. Electrodynamics of materials with negative index of refraction. Physics–Uspekhi. 2003;46(7):764–768. DOI: 10.1070/ PU2003v046n07ABEH001614",
        "Fisanov V. V. On the sign of the refractive index formetamaterials. Russian Physics Journal. 2021;64(8):1560–1565."
      ]
    },
    {
      "id": "3",
      "editionId": "1",
      "title": {
        "Ru": "Совместный расчет механических и радиолокационных характеристик калибровочных раскладных сферических отражате",
        "Eng": "article2"
      },
      "authors": [
        "A. A. Arutyunyan",
        "N. D. Malyutin",
        "G. A. Malyutin",
        "S. N. Podzyvalov",
        "N. N. Yudin"
      ],
      "content": {
        "Ru": "В работе проведено экспериментальное исследование частотных зависимостей коэффициентов матрицы рассеяния полосковых модулей",
        "Eng": "test article content"
      },
      "keywords": [
        {
          "Ru": "нелинейно-оптические кристаллы",
          "Eng": "word1"
        },
        {
          "Ru": "СВЧ",
          "Eng": "word2"
        },
        {
          "Ru": "частотные характеристики",
          "Eng": "word3"
        }
      ],
      "filePathId": "656ce8bb55609fec5299784b",
      "literature": [
        "Veselago V. G. Electrodynamics of materials with negative index of refraction. Physics–Uspekhi. 2003;46(7):764–768. DOI: 10.1070/ PU2003v046n07ABEH001614",
        "Fisanov V. V. On the sign of the refractive index formetamaterials. Russian Physics Journal. 2021;64(8):1560–1565."
      ]
    },
    {
      "id": "4",
      "editionId": "1",
      "title": {
        "Ru": "Алгоритм моноимпульсного измерения углового положения летательного аппарата с помощью искусственной нейронной ",
        "Eng": "article2"
      },
      "authors": [
        "A. A. Arutyunyan",
        "N. D. Malyutin",
        "G. A. Malyutin",
        "S. N. Podzyvalov",
        "N. N. Yudin"
      ],
      "content": {
        "Ru": "В работе проведено экспериментальное исследование частотных зависимостей коэффициентов матрицы рассеяния полосковых модулей",
        "Eng": "test article content"
      },
      "keywords": [
        {
          "Ru": "нелинейно-оптические кристаллы",
          "Eng": "word1"
        },
        {
          "Ru": "СВЧ",
          "Eng": "word2"
        },
        {
          "Ru": "частотные характеристики",
          "Eng": "word3"
        }
      ],
      "filePathId": "656ce8bb55609fec5299784b",
      "literature": [
        "Veselago V. G. Electrodynamics of materials with negative index of refraction. Physics–Uspekhi. 2003;46(7):764–768. DOI: 10.1070/ PU2003v046n07ABEH001614",
        "Fisanov V. V. On the sign of the refractive index formetamaterials. Russian Physics Journal. 2021;64(8):1560–1565."
      ]
    }
  ]
}

const getAllArticles = () => {
  return articles;
}

const getArticlesByIssueId = (id: string) => {
  return articles.data.filter((article) => article["editionId"] == id);
}

const getArticleById = (id: string) => {
  return articles.data.filter((article) => article["id"] == id)[0];
}


export { getAllArticles,  getArticlesByIssueId, getArticleById};