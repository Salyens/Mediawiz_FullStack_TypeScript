import { Link } from "@navigation";
import styles from "./feedbackform.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { MotionDiv } from "@components/MotionDiv";
import CustomForm from "./CustomForm";

const FeedbackForm = () => {
  const t = useTranslations("MainForm");

  return (
    <div className={styles.form_wrapper}>
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6">
        <div className="flex flex-col items-center justify-between lg:flex-row pt-12 pb-16 lg:pt-20 lg:pb-20">
          <MotionDiv
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            className={classNames(
              "flex flex-col xl:text-2xl 2xl:text-4xl md:text:xl text-lg gap-3 w-full lg:w-2/5 xl:w-1/2  mb-16",
              styles.description
            )}
          >
            <p className="text-center lg:text-left">{t("description-1")}</p>
            <p className="text-center lg:text-left">{t("description-2")}</p>
            <Link
              prefetch={true}
              className="flex w-fit m-auto lg:m-0"
              href="tel:+79033750261"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/common/phone.png"
                  width={50}
                  height={50}
                  alt="phone"
                />
                <span className="text-lg md:text-2xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8 xl:mt-12 xl:mb-12 font-normal">
                  8-903-375-02-61
                </span>
              </div>
            </Link>

            <p className="text-center lg:text-left">{t("request")}</p>
          </MotionDiv>

          <MotionDiv
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
          >
            <CustomForm />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
