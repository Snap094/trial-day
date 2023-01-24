import {onBeforeMount} from "vue";

export default function useGetListYear () {
    let listYear = []
    const YearList = function () {
        let currentYear = new Date().getFullYear()
        for (let i = currentYear; i < currentYear + 10; i++) {
            listYear.push(i)
        }
    }

    onBeforeMount(() => {
        YearList()
    })

    return listYear
}