export default function formatLocaleDate(dateString) {
	if (!dateString) return ''

	const [month, year] = dateString.split('/')

	const date = new Date(parseInt(year), parseInt(month) - 1)

	const options = {month: 'short', year: 'numeric'}
	const formattedDate = date.toLocaleString('en-US', options)

	return formattedDate
}
