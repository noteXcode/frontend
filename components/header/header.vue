<template>
    <div class="border-b-2">
        <Container >
           <div class="flex justify-between items-center h-20">
            <HeaderMenuDesktop/>
            <div class="flex space-x-1">
                <ThemeChangeButton/>
                <HeaderLang/>
                <UserAuthModal/>
                <ThemeColorPicker/>
            </div>
           </div>
        </Container>
    </div>
</template>