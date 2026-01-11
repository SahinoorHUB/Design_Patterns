// Factory pattern

interface Vehicle {
    name: string
}

class Car implements Vehicle {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class Bike implements Vehicle {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class VehicleFactory {
    static getInstance(type: string): Vehicle | null {
        if (type === "car") {
            return new Car("Car")
        } else if (type === "bike") {
            return new Bike("Bike")
        }
        return null
    }
}

const car = VehicleFactory.getInstance("car")
const bike = VehicleFactory.getInstance("bike")
console.log(car)
console.log(bike)
console.log(car === bike)


// Factory pattern with real world example 

// login 
//1 normal login
//2 google login
//3 facebook login


// Type of login
//1) customer login
//2) admin login
//3) super admin login

interface Login {
    login(): void
}

class CustomerLogin implements Login {
    login(): void {
        console.log("Customer login")
    }
}

class AdminLogin implements Login {
    login(): void {
        console.log("Admin login")
    }
}

class SuperAdminLogin implements Login {
    login(): void {
        console.log("Super admin login")
    }
}

class LoginFactory {

    static getInstance(type: string): Login | null {
        if (type === "customer") {
            return new CustomerLogin()
        } else if (type === "admin") {
            return new AdminLogin()
        } else if (type === "superadmin") {
            return new SuperAdminLogin()
        }
        return null
    }
}

const customerLogin = LoginFactory.getInstance("customer")
const adminLogin = LoginFactory.getInstance("admin")
const superAdminLogin = LoginFactory.getInstance("superadmin")
console.log(customerLogin)
console.log(adminLogin)
console.log(superAdminLogin)
console.log(customerLogin === adminLogin)
console.log(customerLogin === superAdminLogin)
console.log(adminLogin === superAdminLogin)
