export default function guardrail(mathFunction) {
  const resultsArray = [];

  try {
    resultsArray.push(mathFunction());
  } catch (error) {
    resultsArray.push(`Error: ${error.message}`);
  } finally {
    resultsArray.push('Guardrail was processed');
  }

  return resultsArray;
}
