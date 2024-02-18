import{ data } from '../../Contents/about'

const About = () =>{
    return(
        <div className="spacec-y-4">
            <div className="text-primaryAccent font-medium" >{data.title}</div>
            <div>{data.descrition}</div>
        </div>
    )
}
export default About;