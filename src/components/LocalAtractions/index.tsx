import { FC } from "react";
import { LocalAtraction, LocalInfo } from "./style";

const LocalAtractions: FC = (children: any) => {
    return (
        <>
            <LocalAtraction>
                <LocalInfo>
                    <h3>Local attractions</h3>
                    <p >We are just 100 meters away from Mashreq metro station and within walking distance from the Mall of Emirates.</p>
                </LocalInfo>
            </LocalAtraction>
        </>
    )
}

export default LocalAtractions;