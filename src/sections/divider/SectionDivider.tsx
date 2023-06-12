import Button from "@/components/button/Button";

export default function SectionDivider() {
    return (
        <div className="divider">
            <div className="divider__wrapper">
                <div className="divider__text">
                    <span>Dont just hire me,</span> bring your ideas to the light!
                </div>
                <Button text="Let's get in touch" type="tertiary" link="#" />
            </div>
        </div>
    )
}