import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props)=>{
        const {windows, focusWindow} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);

        useGSAP(()=>{
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = 'block';
            console.log('Animating window open:', windowKey);
            gsap.fromTo(el, {scale:0.8, opacity:0, y:40}, {scale:1, opacity:1, y:0, duration:0.4, ease:"power3.out"})
        }, [isOpen]); 

        // useLayoutEffect(()=>{
        //     const el = ref.current;
        //     if(!el) {
        //         console.log('no el for', windowKey);
        //         return;
        //     }
        //     console.log('setting up draggable for', windowKey);
        //     Draggable.create(el, {
        //         onPress : ()=> {
        //             console.log('onPress for', windowKey);
        //             focusWindow(windowKey);
        //         }
        //     });
        // }, [isOpen]);

         useGSAP(()=>{
            const el = ref.current;
            if(!el) {
                console.log('no el for', windowKey);
                return;
            }
            console.log('setting up draggable for', windowKey);
            const [instance] = Draggable.create(el, {
                onPress : ()=> {
                    console.log('onPress for', windowKey);
                    focusWindow(windowKey);
                }
            });
            return () => instance.kill();
        }, [isOpen]);

        useLayoutEffect(()=>{
            const el = ref.current;
            if(!el) return;
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

        if (!isOpen) return null;

        return <section id={windowKey} ref={ref} style= {{zIndex}} className="absolute">
            <Component {...props}/>
        </section>
    }

    Wrapped.displayname = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
  
}

export default WindowWrapper