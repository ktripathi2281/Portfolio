import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { socials } from "#constants";
const Contact = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="contact" />
        <h3>Contact Me</h3>
    </div>

    <div className="p-5 space-y-5">
        <img src="/images/me.jpg" alt="Kaustubh Tripathi" className="w-20 rounded-full" />
        <h2>Let's Connect</h2>
        <a href="mailto:tripathikaustubh2281@gmail.com" className="block hover:underline">tripathikaustubh2281@gmail.com</a>
        <ul>
            {socials.map(({id, bg, link, icon, text})=>(
                <li key={id} style={{background:bg}}>
                    <a href={link} target="_blank" rel="noreferrer" className="size-5" title={text}>
                        <img src = {icon} alt={text} />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}
const ContactWindow = WindowWrapper(Contact, 'contact')
export default ContactWindow;