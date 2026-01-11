

//Normal class
class User {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const arnab = new User("Arnab", 40)
const arun = new User("Arun", 45)

// Normal class object
console.log(arnab)
console.log(arun)
console.log(arnab === arun)

//Singleton pattern
class ClassA {
    private static instance: ClassA;
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    static getInstance(name: string, age: number) {
        if (!ClassA.instance) {
            ClassA.instance = new ClassA(name, age)
        }
        return ClassA.instance
    }
}

//Singleton class object
const arnabA = ClassA.getInstance("Arnab", 40)
console.log(arnabA)

const arunA = ClassA.getInstance("Arun", 45)
console.log(arunA)

console.log(arnabA === arunA)



class AppSettings {
    private static instance: AppSettings;
    private theme: string
    private language: string
    private apiBaseUrl: string
    private apiKey: string
    private constructor() {
        this.theme = "dark"
        this.language = "en"
        this.apiBaseUrl = "https://api.example.com"
        this.apiKey = "1234567890"
    }

    static getInstance() {
        if (!AppSettings.instance) {
            AppSettings.instance = new AppSettings()
        }
        return AppSettings.instance
    }

    getTheme() {
        return this.theme
    }

    getLanguage() {
        return this.language
    }

    getApiBaseUrl() {
        return this.apiBaseUrl
    }

    getApiKey() {
        return this.apiKey
    }
}

const settings = AppSettings.getInstance()
console.log(settings.getTheme())
console.log(settings.getLanguage())
console.log(settings.getApiBaseUrl())
console.log(settings.getApiKey())







