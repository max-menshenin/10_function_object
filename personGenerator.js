const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
    }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алена",
            "id_2": "Мария",
            "id_3": "Иванна",
            "id_4": "Анна",
            "id_5": "Дина",
            "id_6": "Ника",
            "id_7": "Мирослава",
            "id_8": "Дарья",
            "id_9": "Елена",
            "id_10": "Анастасия"
        }
    }`,
    occupationFemaleJson: `{
        "count": 11,
        "list": {
            "id_1": "Программистка",
            "id_2": "Менеджер по рекламе",
            "id_3": "Актрисса",
            "id_4": "Дизайнер",
            "id_5": "Швея",
            "id_6": "Специалист по туризму",
            "id_7": "деревообработчик",
            "id_8": "Юрист",
            "id_9": "Бухгалтер",
            "id_10": "Психолог ",
            "id_11": "Журналист"
    }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {

        return this.randomValue(this.firstNameMaleJson);

    },


    randomSurname: function () {

        return this.randomValue(this.surnameJson);

    },


    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        return this.person;
    }
};
