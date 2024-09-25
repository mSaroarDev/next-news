import { ButtonDarkLink } from "@/subcomponents/Buttons";
import { H1, P } from "@/subcomponents/Headings";

const FeaturedPostBig = () => {
  return (
    <>
      <div className="w-full h-[250px] rounded-md overflow-hidden">
        <img
          src="https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
          className="w-full h-full object-cover"
          alt="Title"
        />
      </div>
      <div className="my-5">
        <H1
          className="text-[22px] leading-[25px]"
          text="How to create a lorem ipsum text into webpage"
        />
        <P
          className="my-2"
          text="lorem ipsum symply dumm text wheenr you need dolor"
        />
        <P className="text-black" text="Bangladesh" />
        <P className="mb-5" text="20 July, 2024" />

        {/* <Link href="/" className="rounded-lg border border-brand text-main font-semibold px-5 py-1.5 cursor-pointer"></Link> */}
        <ButtonDarkLink text="Read More" link="/" />
      </div>
    </>
  );
};

export default FeaturedPostBig;
