const SEND_MSG = 'SEND-MSG'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'

// дефолтные значения для dialogePage
let initState = {
	dialoge: [
		{ id: '1', name: 'Ura', pick: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ1sw-GuwQ_CgOzs8pvTBeUhrEDs6OFycxXw&usqp=CAU' },
		{ id: '2', name: 'Valera', pick: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHPBJ9dzlho4N82TrvILbIk8akle0k1ahf4Q&usqp=CAU' },
		{ id: '3', name: 'Kostya', pick: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSryPyPKviShvvwlv2L4-DbKjov5zMQ-_zURg&usqp=CAU' },
		{ id: '4', name: 'Nikita', pick: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkdz8XP4Acc_7Go1CYKSGvke6o7k997W0EtQ&usqp=CAU' },
	],
	friends: [
		{ id: '1', name: 'Vitya', pick: 'data:image/jpeg;base64,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' },
		{ id: '2', name: 'Ilya', pick: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAYFBMVEVJh87///+ev+W2z+tPi9DH2vD6/P6qx+jx9vvC1+/q8flmmtZXkNKYu+Pl7vhSjdCErt7b5/Vyotl6p9tbk9OBrN2St+LV4/Snxefv9ftpnNeyzOqKst+80+2aveRwodkS2cU2AAAL2klEQVR4nM1d64KzKgzU3m/by7bd3r99/7c8arWVOMAQoXvm5y5VR0IyhAhZnhbzwb+fAl+DwfQxPq0nyW6UJbvyE4fMxOr3+HU7zeLfKDGRcYax3E5PcXsnMZG7hUiJ0e/XOB6ZSER25y3682zkIFKR2U/XcZ4gBpHdYJllA/Sfh4dHhes5BpfeRBbnZfU48GH2DJECv7few78fkcnwt3kU9O8FyaO0se2415P0IjI7v53rDTWY8kQKXId9hr6eyPqrNZJHF9TkGkSkCDKDxceJrO+GQzqiNrtAHuUL+dFS0RFZb8UDzFGrf+FE9FQ0RC4/MjxsoHVLecJS+adxYeFEJtNN594/qKFNnvixGn6AyHgJ7nxCLV3yxIcrvGJEIgsY4g6oqVeeuPETaF9hRKb44fTyxIFA+wohgrsj6ylP7NiGdEoAkZvNVvrKEytWAbKFJjKxj90I8sSGAa1aWCI75KyeiCNPLPhlwyNJxGpWWTx5grEhzYsiMvlx3SqePME4RyMyczogKE8mSnkCsWUGCkFkbR8eJSLLE4Rvwg/7iYy70soAFBNSHffEYdefiI8HlCcTz4+CsfIy8RF5+BRTEnnSxcanIj1Ebt47JJInXSYeN+wmMvReP5k86WDk7hMnET+PlPJEwm1dLiIEjxF0jG5/rYazTxxExsTMKK08kdg4fJedyImZ4UF58pWKSLayZ4mtRHZMKFhBebJKRiRbQqXtInKhxNIH5InAt013WYhMvqnLRs+e+AHfnZ2IU7e/sEQ/7Zk98WIaQoRwvCXgTIH8rRoWJwyJ7MiX+il5YuIABzwiMiED2ufkiQk44BGRI3lBKE/OSTk8gRQ3IMIaedLsifvOYJh0iazZSRFckE4mTwwcuhKvS4QerB+WJwbufiL+qVSN9NkTFzrGJYnQhvUH8qSNjnFJInwU+ET2xIEvNxH+jaZY3AnBSMxNTCJsKMw+lj2xY+8iEhDNoDzhNHMkmF7TILLg82rfiMc64WN3sTTcpkGEE+8V/kye2J6hTSTghX40e2LDqv0QbSIBvvMP5UkL7flQpnsOKE8CLDMONq0uaREJ6BCYPcnnQ4nzv63H3A6d30Dczl9HcKVWl7yJhLgcWwYAYXH7dVyJW1errzSVXFqj5E0kxDACK0Vg/coTgXWZcyFK347rReQSoC5g9sSFmc1sYThyXskUg+9Y8iISEgNC7KGGpb/D65km5jt5eZ0XkZCJhKJOdwJlNQ5HnisZk+lXlzZE5gE8gu2hxAKZLgxHPpjJqkYEN0RCslFQnniBjAuGIy8M42rmJTWRkGyUxh5yGG9xOPLihK5REwkZ6ip7yNEoDAlHLZiL33ODSIjc09Z+d12wvwwAwxgHxzaREJmltIc8H8grBYejBsZwqy39SSQkGyVn/TQ65qsIRzl43EeLSIhlQXkyn5pA/qBDBIaj28AE6n/TAe7fREIsC9qDrD2BjaT/heFI5mFgxt8cbU/byuC7cgDag8yewEYyVEF5IhOdMGaJRPn8RcSlsyWoxR3USPYaDkfiUWDGfybu9tMQuQTwgPYgw+keNTqJRtRsGRYkSDl1aIiE6CxoD7L2BDaSnhHKE+miYaPOsvGuJhIwpcL2cGUaicCOwxHTqFvVdquJBCwyUfYAG8msMgxH0vyghunmZbdPInLsuADliTQa2EgKFChPpNHAmNUV6ocnkYA1Dar25IAayfiAaw2YcISE+roi0tFAdlCLO9BoqEgjvQ5shKraHhURdjU6s9gDZTTSHmDJO9UIjeivigg/W6dqT66okbQHGI5kPIONoJzal0QCwiElT2DRixRB8cJRhVVJRLo8Byh5wtgDJ0+YcFTjUhDhq3n08oSKNDJnS4WjGqeCCD+pgl0tjeaBGlGRRnpP2MhS1TYsiNBOi1rcwWUEItLo5Ylt2XhQEKFnh/HkCQxHSnnS3DbL6QXQD8sTKhw1+M0zWmlheaKRq/rZsjWPuMozen0HKg9pNP9QI0qeUI3sc/I8o8MIVXtC2YN6tuyYcMwydnqolyeyz6lwxMuTmnfGxkOqNPYv5MkTp4z91uP/K08qjDNyNpJYnqjCURtzlkhieSI/JKXCkXHrjJNaieWJDEfUbNnAkCRC2UO39DMn5YlqtmzglnFJLb08oRIjveRJhSlHBHZ1J3uC7k5lT6Q8ocKRJEKZFiVPYJWjjDQp5EmJG0fk/5A9cU83hpT7/bA8ocKRwCNjFnn08oRSHn3lSYl5xtTCU6WxennCNPIV3Y8zouYYdrU0mnjyhApHEruMSGEnlieq2bLEmphYUfKEsoce2RNfZmFGTHWhPUj+ieWJb9Y0yrOJlwjsaikIKHtIJE+yUlVkue8T4cTyRBWOOvguiPhWECl7SJw98U5j70TKlJIn+kgTQZ5kz5SpR6PArqYqRih5ogpHXTwKIp6I+OHsCRWOujj5F3pgVwujwd+IMpFGNVsGmBVE3MnfePZA7XOhkieV08w8Iwl2tTQa6hvRdPKkekmZu13q7Imm1gBgUBFxOWlKnlCRhmpEzZYBxhUR12in5AmVp4+XzAe4VEQm9q7D8kQo0b+WJ8+Ll2VO9kpAqETlQoQ+e6IKRwD3mog9tsOulpom3uKOTp48Q21JxOqnKXugtrBIlj2psK6JWHeMg/ZAFbRS8oSaLROZ0Op9V+WyNr8Au5opaP2oPHnOISoilpQQlT2hlEe82TLC6UXE4uEoe/hzeVL35LPIHzrg1LUn47kJ1IbZsuDZk08iUKUklicUmDXncYsItK148kT75Q61ZUFtE/WnScC2OLmK7k7JEwrMN2y1j6iJAL+VWJ5QYJYKxgYRMKgoeaIvK2HAbArS2ETzQWXHzSWWJxSYOpmmuxsincCTWJ4wmDEVyY36eH10LHsxsTwhgL9TFnipjxeRoaVBGyp5AhsxPKitG14x4kVEOFaoRKnvbSjl4ceC+vDrPUjfWyUYT0mVGfWQJ17IPREseL/vN5FLe1byt/Jk8iA3IWrlFFrbibRtYj8AkFc/okbSIqCGGaJfNvja09tPtLxmiwjcA6Avku4S2k7ytLfcSbERHhWOtGhHqDaRkB1FWKTchsvYl8rYlirgaysSSbfhMkKEQWQWfe9karashCn0zK3bYu8htwmteg2BKc/FroAh31EToMKREiLpkiW5SQNqtqzDSKhaueFk1M2+Um5iLhPekgg1B2BBzZZ16LjDzqasMXcjpWbLKow68am7TW687UgTypOuYOgSiWdccN0mijwB0z6wlXQ0z8XMllXYAOGDNveOJB6p2bIKSC/A7dbjhMVk8gSGWbgB/iKGq496jmgbV3hhfCRBjGEC120iXHiFj7GzHBIRwQJSyRNLVsZ2/kjvaJJKntgy4jYiVJrPhUTyxLq7l/Vom0XPYUmVQgZjb82S2Q8bWvcygzTy5GrPIzuOf9r1YZJEntiPGnIfyEUdAGUBUwoZioNrxch5RNpJfRpgCnni5OE5tI45XAyCKoUMg+dIRM8xgkomCTYxd/eH/2BH3YiPL0+WvvN1vUdtqphElydeHsThp55DXBGinyO6969DEsfRuo/VRYAfYfSQJ3di1Ys5IJhblmwhcvYElldoiOT5MMh5wapX9ZoFebY5eYj2KURCRpUnV7IAhD3WfBEgL2JmT7ZsuQF90LzzZHMDEeXJit/9myeSn0g/HE+efAfUFQUQyWdUwgtnTxTyZBRU5xVChOuUWPIkpDuCieSTmzc+x5EnAaNDRaQYtZ44T31I6sXdq616EynMxOlJYRgOlCd7RfGggkhhX44X3F+eLFUnLmiIFFSGtkjfW57oaGiJFK74jHulpzw53LTnBGiJlEVVyBfDhA0rT/baYxvyPkRKKp0n7CNPjoFHGJnoQ6R8xoGiFBLhOtQWo9boSaTolvnxPZRHOnmyufewqRq9iRSY3ZriPY08KVhoB3gbMYjkZb/cS4ccLE+ug1MMFnk0IiXWN9ghVnmy/HkECxE7IhKxAMmT5XEw7jm4JdITMeTJ6vc+eJwic6iQnsitPCHmNhzOT7tLpPGA8B8PK6YB6rg/EAAAAABJRU5ErkJggg==' },
		{ id: '3', name: 'Evgeniy', pick: 'data:image/jpeg;base64,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' },

	],
	message: [
	],
	newTextMsg: '',
}

const dialogeReducer = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_NEW_TEXT_MESSAGE:
			return {
				...state,
				newTextMsg: action.msgText,
			}
		case SEND_MSG:
			let newMsg = state.newTextMsg
			return {
				...state,
				newTextMsg: '',
				message: [...state.message, { id: 5, message: newMsg, likeCount: 0, }],
			}
		default:
			return state
	}
}


// функции для actiona сообщений
export const sendMsg = () => ({ type: SEND_MSG })
export const updateNewTextMessage = (text) =>
	({ type: UPDATE_NEW_TEXT_MESSAGE, msgText: text, })

export default dialogeReducer