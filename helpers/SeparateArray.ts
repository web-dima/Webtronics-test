import StepInterface from "../components/Steps/Step.interface";

export default function separateArray(array: StepInterface[]): [StepInterface[], StepInterface[]] {
    const evenArray: StepInterface[] = []
    const oddArray: StepInterface[] = []

    array.forEach((item)=>{
        if (item.step %2 === 0) {
            evenArray.push(item)
        } else {
            oddArray.push(item)
        }
    })

    return [evenArray, oddArray]
}