const Signin = () => {
    const [checked, setChecked] = useState(false);
    
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In"/>
            <Input label="Email" placeholder='bomb@gmail.com'/>
            <Input label="Password" placeholder='********'/>
            <Button title="Sign In" style={styles.button}/>
            <Separator text="Or sign up with"/>
            <GoogleLogin />
            <Text style={styles.footerText}>Dont have an account?
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
    )
}