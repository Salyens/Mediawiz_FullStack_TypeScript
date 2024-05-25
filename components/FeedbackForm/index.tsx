import Link from "next/link";
import styles from "./feedbackform.module.css";
import Image from "next/image";
import CustomForm from "./CustomForm";
import { useTranslations } from "next-intl";
import AnimationWrapper from "@components/AnimationWrapper";

const FeedbackForm = () => {
  const t = useTranslations("MainForm");

  return (
    <div className={styles.form_wrapper}>
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6">
        <div className="flex flex-col items-center justify-between lg:flex-row pt-12 pb-16 lg:pt-20 lg:pb-20 xl:pt-28 xl:pb-28">
          <AnimationWrapper
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            classes={`flex flex-col xl:text-2xl 2xl:text-4xl md:text:xl text-lg gap-3 w-full lg:w-2/5 xl:w-2/5 items-center mb-16 ${styles.description}`}
          >
            <p className="text-center lg:text-left">{t("description")}</p>
            <Link className="flex w-fit m-auto lg:m-0" href="tel:+79033750261">
              <div className="flex items-center gap-2">
                <Image src="/common/phone.png" width={50} height={50} alt="phone" />
                <span className="text-lg md:text-2xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8 xl:mt-12 xl:mb-12 font-normal">
                  8-903-375-02-61
                </span>
              </div>
            </Link>

            <p className="text-center lg:text-left">{t("request")}</p>
          </AnimationWrapper>

          <AnimationWrapper
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            classes="w-full md:w-2/3 lg:w-1/2 xl:w-2/5"
          >
            <CustomForm />
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
