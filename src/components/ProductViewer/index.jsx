import clsx from "clsx"
import useMacbookStore from "../../store"

const ProductViewer = () => {
    const {color, setColor, scale, setScale, reset} = useMacbookStore()
  return (
    <section id='product-viewer'>
       <h2>Take a closer look.</h2>
       <div className="controls">
       <p className="info">MacbookPro {scale}' in {color} </p>
       <div className="flex-center gap-3 mt-5">
        <div className="color-control">
             <div 
               onClick={()=>setColor('#adb5bd')}
               className={clsx("bg-neutral-300", color === '#adb5bd' && "ring-2 ring-offset-2 ring-neutral-900")}
              /> 
              <div   
               onClick={()=>setColor('#2e2c2e')}
               className={clsx("bg-neutral-900", color === '#2e2c2e' && "ring-2 ring-offset-2 ring-neutral-900")}
              />
        </div>
        <div className="size-control">
               <div   
               onClick={()=>setScale(0.6)}
               className={clsx(scale===0.6 ?'bg-white text-black': 'bg-transparent text-white' )}
              ><p>14</p>
              </div>
               <div   
               onClick={()=>setScale(0.08)}
               className={clsx(scale===0.8 ?'bg-white text-black': 'bg-transparent text-white' )}
              ><p>16</p>
              </div>
        </div>
       </div>

       </div>
       <p className="text-4xl ">Render Canvas</p>

    </section>
  )
}

export default ProductViewer
