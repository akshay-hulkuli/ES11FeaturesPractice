const regex = /\b(iPhone)+\b/g;
const smartphones = "S series, iPhone, note series, iPhone, A series, iPhone, moto phones";

for (const match of smartphones.match(regex)) {
  console.log(match); 
}

console.log('############ matchAll #############');

for (const match of smartphones.matchAll(regex)) {
    console.log(match);
  }