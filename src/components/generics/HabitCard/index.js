import TitleCard from "../../atomics/TitleCard";
import WeekDay from "../WeekDays";

import { Images } from "../../../utils/img/images_import";

import { CardHabitStyle, HeaderCardHabit } from "./style";
import IconTrash from "../../atomics/IconTrash";

export default function CardHabit({ id, title, arrayDays, refresh, setRefresh, setReload, reload }) {

  return (
    <CardHabitStyle>
      <HeaderCardHabit>
        <TitleCard>{title}</TitleCard>
        <IconTrash id={id} src={Images["IconTrash"]} refresh={refresh} setRefresh={setRefresh} setReload={setReload} reload={reload} />
      </HeaderCardHabit>
      <WeekDay disabled={true} arrayDays={arrayDays} />
    </CardHabitStyle>
  )
}