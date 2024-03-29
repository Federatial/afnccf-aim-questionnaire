
const aimCategories = [
	"A","A","A","A","A","A","A","A","A","B","B","C","C","C","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","H","H","H"
];
	
const aimTags = [
	"hide-subpage [[Social-Ecological Work]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Educational-Vocational Training]] FamilyWork MultiFamilyWork [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Educational-Vocational Training]] FamilyWork [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Educational-Vocational Training]] FamilyWork [[Social-Ecological Work]] AIMQuestion",
	"hide-subpage [[Crisis Contingency Planning]] FamilyWork Pharmacological [[Physical Health matters]] [[Social-Ecological Work]] SubsistenceSupport [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Crisis Contingency Planning]] FamilyWork LivingSkills SubsistenceSupport [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage FamilyWork LivingSkills [[Physical Health matters]] [[Social-Ecological Work]] SubsistenceSupport [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Crisis Contingency Planning]] [[Educational-Vocational Training]] FamilyWork [[Group Work]] LivingSkills [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Group Work]] LivingSkills [[Social-Ecological Work]] AIMQuestion",
	"hide-subpage SubsistenceSupport [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage SubsistenceSupport [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Child Protection Referral]] FamilyWork MultiFamilyWork AIMQuestion",
	"hide-subpage [[Child Protection Referral]] FamilyWork MultiFamilyWork AIMQuestion",
	"hide-subpage [[Child Protection Referral]] FamilyWork MultiFamilyWork AIMQuestion",
	"hide-subpage [[Child Protection Referral]] FamilyWork [[Social-Ecological Work]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Group Work]] LivingSkills MentalizationBasedWork [[Social-Ecological Work]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork MultiFamilyWork [[Social-Ecological Work]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Educational-Vocational Training]] FamilyWork LivingSkills [[Social-Ecological Work]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] FamilyWork MentalizationBasedWork Pharmacological AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] FamilyWork Pharmacological [[Social-Ecological Work]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] FamilyWork Pharmacological AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] FamilyWork Pharmacological [[Social-Ecological Work]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork Pharmacological AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] Pharmacological [[Physical Health matters]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] FamilyWork [[Group Work]] MentalizationBasedWork Pharmacological AIMQuestion",
	"hide-subpage [[Crisis Contingency Planning]] EmergencyProcedures FamilyWork MentalizationBasedWork [[Motivational Work]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork [[Motivational Work]] MultiFamilyWork [[Physical Health matters]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork [[Motivational Work]] MultiFamilyWork [[Physical Health matters]] [[Social-Ecological Work]] [[Substance use disorder - treatment]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork [[Use the Mental Health Act]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Crisis Contingency Planning]] FamilyWork MentalizationBasedWork MultiFamilyWork [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Crisis Contingency Planning]] FamilyWork MultiFamilyWork [[Social-Ecological Work]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork MultiFamilyWork Pharmacological [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork [[Social-Ecological Work]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork Pharmacological AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] FamilyWork Pharmacological [[Physical Health matters]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage MentalizationBasedWork AIMQuestion",
	"hide-subpage [[Cognitive Behavioural]] [[Crisis Contingency Planning]] [[Motivational Work]] Pharmacological [[Use the Mental Health Act]] AIMQuestion",
	"hide-subpage FamilyWork [[Motivational Work]] [[Use the Mental Health Act]] [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage [[Working with the Professional Network]] AIMQuestion",
	"hide-subpage AIMQuestion",
	"hide-subpage AIMQuestion",
	"hide-subpage AIMQuestion"
];
	
const aimLists = [
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4",
	"0plus 0 1 2 3 4"
];
	
const listQuestions = Array.from(document.querySelectorAll("body > .WordSection1 > *")).filter(el => /^\d\d? [–-].*/.test(el.textContent));

console.log(Array.from(document.querySelectorAll("body > .WordSection1 > *")).map(el => el.textContent.trim()));

const questions = listQuestions.map(el => {
	const result = {};
	// Question title
	result.title = el.textContent.trim().replace(/\s+/mg," ");
	// Make sure we have a leading zero on the number
	result.title = result.title.replace(/^(\d) /, "0$1 ");
	// Extract question number from title
	const number = parseInt(result.title.match(/^(\d\d?)/)[1],10);
	result.number = number.toString();
	// Get the standard AIM information
	result.category = aimCategories[number - 1];
	result.tags = aimTags[number - 1];
	result.list = aimLists[number - 1];
	// Extract the question caption from the title
	result.caption = result.title.split(/-|–/)[2].trim();
	// Find the question text by moving past the blank lines
	var elQuestion = el.nextElementSibling, textQuestion;
	while(textQuestion = elQuestion.textContent.replace(/\s+/mg," ").trim(),textQuestion === "" || textQuestion === "Kernproblem") {
		elQuestion = elQuestion.nextElementSibling;
	}
	result.text = textQuestion;
	// Find the answer text by moving past the blank lines
	var elAnswer = elQuestion.nextElementSibling, textAnswer;
	while(textAnswer = elAnswer.textContent.replace(/\s+/mg," ").trim(),textAnswer === "") {
		elAnswer = elAnswer.nextElementSibling;
	}
	// Get the answer strings
	var currAnswer = null;
	while(textAnswer = elAnswer.textContent.trim().replace(/\s+/mg," "), textAnswer !== "") {
		const match = textAnswer.match(/^(\d\+?)\s*=(.*)$/m);
		if(match) {
			const number = {
				"0+": "answer0plus",
				"0": "answer0",
				"1": "answer1",
				"2": "answer2",
				"3": "answer3",
				"4": "answer4",
			}[match[1]];
			result[number] = match[2].trim();
			currAnswer = number;
		} else {
			result[currAnswer] = (result[currAnswer] || "") + textAnswer;
		}
		elAnswer = elAnswer.nextElementSibling;
		textAnswer = elAnswer.textContent.trim().replace(/\s+/mg," ");
	}
	// Return result
	return result;
});

console.log(JSON.stringify(questions,null,4));
	
	