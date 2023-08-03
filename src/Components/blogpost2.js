
import { Card } from "react-bootstrap";
 
const Post2 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
                "https://pronatalfitness.com/wp-content/uploads/2018/08/Pregnant-woman-on-ball.jpg"
                width={20}
                height={350}
            />
            <Card.Body>
                <Card.Title>PELVIC FLOOR HEALTH</Card.Title>
                <Card.Text>
                Pelvic floor disorders (PFD) are a sensitive subject that many women find difficult to talk about. But the reality is that these conditions can have a profound impact on quality of life, and many women deal with these conditions in silence as a result.
                While not often talked about, PFDs are common. As many as 1 in 4 women will experience some type of PFD in their lifetime, and the incidence increases with age. Pelvic floor disorders can happen after pregnancy and childbirth and have symptoms including abdominal discomfort and bladder and bowel issues like urinary or fecal incontinence and constipation. Symptoms of PFD can significantly impair your quality of life and even lead to depression.
                Conditions treated by the FIRST Clinic include:
                                defecatory disorders
                                pelvic organ prolapse
                                urinary incontinence
                                fecal incontinence
                By bringing a range of specialists who treat PFDs together, the FIRST clinic can better provide patients with a comprehensive assessment and treatment plan that addresses their unique needs."At the Penn Women's FIRST Clinic, we believe that every patient deserves access to the most advanced and innovative treatments for their specific pelvic floor disorder," Dr. Rashid said. "We are committed to staying at the forefront of research and innovation, so that we can offer our patients the best possible care."
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};
 
export default Post2;