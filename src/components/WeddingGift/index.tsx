import { ShowWeddingText } from "@/animations";
import { H3 } from "@/design-system";
import { Accordion } from "@/design-system/Accordion";
import { Info } from "./Info";
import { brideFamily, groomFamily } from "./constants";
import Icons from "@/design-system/icons";
import { Share } from "./Share";

export const WeddingGift = () => {
  return (
    <>
      <ShowWeddingText
        text="신랑 & 신부에게"
        variant="black"
        color="darkOrange"
        size={48}
        el="h2"
      />
      <ShowWeddingText
        text="마음 전하기"
        variant="black"
        color="darkOrange"
        size={48}
        el="h2"
      />

      <ShowWeddingText
        text="축복의 의미로 축의금을 전달해보세요."
        variant="regular"
        color="black"
        size={16}
        el="p"
      />

      <hr />

      <Accordion
        initiallyOpen={false}
        header={
          <H3 variant="medium" size={18} color="black">
            신랑측 계좌번호
          </H3>
        }
        content={
          <div>
            {groomFamily.map((item) => (
              <Info
                key={item.name}
                account={item.account}
                name={item.name}
                role={item.role}
              />
            ))}
          </div>
        }
      />

      <hr />
      <Accordion
        initiallyOpen={false}
        header={
          <H3 variant="medium" size={18} color="black">
            신부측 계좌번호
          </H3>
        }
        content={
          <div>
            {brideFamily.map((item) => (
              <Info
                key={item.name}
                account={item.account}
                name={item.name}
                role={item.role}
              />
            ))}
          </div>
        }
      />
      <hr />

      <Share />
    </>
  );
};
