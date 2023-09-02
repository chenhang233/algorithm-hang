function strong(target) {
  target.AK = true
}

@strong
class Soldier {}

const soldier = new Soldier()
console.log(soldier.AK)
