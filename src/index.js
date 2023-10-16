import { ComponentService } from "./utils/component"
import { run } from "./app"
import "./main.scss"

const componentService = new ComponentService()

run(componentService)

import $ from "jquery"
const testTag = $('#test')
testTag.text('jQuery works!')
testTag.text('update works!')