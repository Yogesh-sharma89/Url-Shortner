
import useCreateForm from "../../hooks/ui/useCreateForm";
import { FormError } from "./FormError";
import { Loader2Icon } from "lucide-react";

const UrlShortenSection = () => {

  const {handleSubmit,onSubmit,isPending,errors,register,url}  = useCreateForm();


  const isInputEmpty = !url || !url.trim();

  return (
    <section className="container">
        
      <form className="shorten-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="shorten-form-row">
          
          <input
            type="url"
            disabled={isPending }
            className={`input ${errors.originalUrl ? "input-error":""}`}
            placeholder="Paste your long URL here..."
            {...register("originalUrl")}
          />

          <button  disabled={isInputEmpty || isPending} className="btn disabled:cursor-not-allowed btn-primary shorten-form-button">
            {
              isPending ? <Loader2Icon className="size-4.5 animate-spin"/>
              :
              "Shorten URL"
            }
          </button>
        </div>

        {
          errors.originalUrl && <FormError message={errors.originalUrl?.message}/>
        }

      </form>

       

      {/* Temporary visual result */}

      
    </section>
  );
};

export default UrlShortenSection;
