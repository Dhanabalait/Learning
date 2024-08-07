const users = [{
    fname: "Bala",
    age: 24,
    city: "CBE"
}, {
    fname: "Arun",
    age: 26,
    city: "CBE"
}, {
    fname: "Ram",
    age: 16,
    city: "Salem"
}, {
    fname: "Viji",
    age: 30,
    city: "27"
}];

console.table(users);


let userStatus = users.map((user) => ({
    ...user,
    status: user.age >= 18 ? "Selected" : "-"
}));

console.table(userStatus);