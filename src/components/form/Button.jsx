import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

export default function Button({
	onPress,
	color = '#3766FF',
	text,
	wrongValidation,
	loading = false,
	error = false,
	errorMessage,
	success = false,
	successMessage,
    fontSize,
    style,
	...props
}) {
	return (
		<View {...props}  >
			
			<TouchableOpacity
				onPress={onPress}
				activeOpacity={0.8}
				className={`rounded-xl h-14 justify-center items-center px-6  bg-primary-normal`}
				style={style}
			>
				{loading ? (
					<ActivityIndicator size='large' />
				) : (
					<Text
						className='text-white font-semibold text-xl'
					>
						{text}
					</Text>
				)}
			</TouchableOpacity>
		</View>
	)
}