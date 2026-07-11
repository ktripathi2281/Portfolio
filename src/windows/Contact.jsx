import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import useWindowStore from "#store/window";
import { socials } from "#constants";
const Contact = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="contact" />
        <h3>Contact Me</h3>
    </div>

    <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt="Me" className="w-20 rounded-full" />
        <h2>Let's Connect</h2>
        <p>tripathikaustubh2281@gmail.com</p>
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