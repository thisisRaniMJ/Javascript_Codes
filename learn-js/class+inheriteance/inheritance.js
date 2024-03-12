class Artist
{
    art()
    {
        console.log("perform and respect art")
    }
    earn()
    {
        console.log("earn respect")
    }
}
class Painter extends Artist
{
    paint()
    {
        console.log("paint")
    }
    earn()
    {
        console.log("earn respect and money")
    }
}
p = new Painter()
p.art()
p.paint()
p.earn()