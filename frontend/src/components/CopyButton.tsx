import { CheckIcon, CopyIcon } from 'lucide-react';
import  { useState } from 'react'
import { toast } from 'sonner';

const CopyButton = ({text,className}:{text:string,className:string}) => {

    const [copied,setCopied] = useState(false);

    const handleCopy = async()=>{

        if(!text.trim()){
            return;
        }

        try{
            await navigator.clipboard.writeText(text.trim());

            setCopied(true);

            toast.success("Link copied successfully",{
                description:"The shortened path address is now ready to share."
            })

            //after some time copied become false
            setTimeout(()=>setCopied(false),2000);

        }catch(err){
             toast.error("Failed to copy link");
        }
    }

  return (
    <button 
    type='button'
    className={className}
    onClick={handleCopy}
    >

        {
            copied ?  <CheckIcon className="w-4 h-4 animate-in fade-in zoom-in duration-200" />
            :
            <CopyIcon className='size-4'/>
        }

      
    </button>
  )
}

export default CopyButton
