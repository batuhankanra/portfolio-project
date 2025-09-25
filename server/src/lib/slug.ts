import Slugger from "github-slugger";


 const slug =new Slugger()

export function Slug(text:string):string{
    return slug.slug(text)
}